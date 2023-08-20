import websocket
import websockets
import datetime as dt
import traceback
import json
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
import time
from pydantic import BaseModel
from threading import Thread
import ccxt
import asyncio
from pytz import timezone
app = FastAPI()


# uvicorn main:app --reload

UPBIT_TICKER_LIST = []
UPBIT_INFO = {}
BINANCE_INFO = {}
upbit = ccxt.upbit({
    'options': {
        'createMarketBuyOrderRequiresPrice': False,
    },
})
binance = ccxt.binance({
    'options': {
        'createMarketBuyOrderRequiresPrice': False,
    },
})

class Item(BaseModel):
    signal: bool = True
    ticker: str

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://172.30.1.87:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

url = "wss://stream.binance.com:443/ws/!ticker@arr"
ticker_list = ["BTC","XRP","HBAR","SEI","BCH","DOGE","STMX","ETH","KAVA","SUI","SOL","ETC","MASK","TRX","EOS","MTL","STX","KNC","WAVES","SAND","FLOW","XLM","APT","ADA","ALGO","MATIC","LINK","T","AXS","NEO","ARB","GMT","SXP","CELO","STORJ","1INCH","ANKR","ZIL","ATOM","QTUM","VET","ZRX","ONT","ICX","CHZ","MANA","AVAX","NEAR","BAT","AAVE","IOST","ENJ","THETA","IMX","DOT","IOTA","GRT","XEM","XTZ","EGLD"]
class TickerWebSocket(Thread):
    def __init__(self):
        Thread.__init__(self)
        global ticker_list
        global url
        global BINANCE_INFO
        global binance
        tickers = binance.fetch_tickers()
        for key,item in tickers.items():
            if '/USDT' in key:
                if key.replace('/USDT','') in ticker_list:
                    BINANCE_INFO[key.replace('/USDT','')] = item['close']
    def on_message(self, ws, message):
        tickers = json.loads(message)
        for ticker in tickers:
            if ticker['s'].replace("USDT","") in ticker_list:
                BINANCE_INFO[ticker['s'].replace("USDT","")] = ticker['c']
    def on_error(self, ws, error):
        print("error")

    def on_close(self, ws):
        print("closed")

    def run(self):
        ws = websocket.WebSocketApp(url,
                                    on_message=self.on_message,
                                    on_error=self.on_error,
                                    on_close=self.on_close)
        ws.run_forever()
class UpbitWebSocket(Thread):
    def __init__(self):
        Thread.__init__(self)
    async def upbit_ws_client(self):
        timeout=15
        count = 0
        global UPBIT_TICKER_LIST
        global ticker_list
        tickers = upbit.fetch_tickers()
        for key,item in tickers.items():
            if '/KRW' in key:
                if key.replace('/KRW','') in ticker_list:
                    UPBIT_INFO[key.replace('/KRW','')] = item['close']
                    UPBIT_TICKER_LIST.append('KRW-'+key.replace('/KRW',''))
        self.body = [
            {"ticket": "test-websocket"},
            {
                "type": "ticker",
                "codes": UPBIT_TICKER_LIST,
                "isOnlyRealtime": True
            },
            {"format": "SIMPLE"}
        ]
        while True:
            try:
                print("OHTANI")
                url='wss://api.upbit.com/websocket/v1'
                response = ""
                async with websockets.connect(url,ping_interval=None) as websocket:
                    # print(f'body: {.body}')
                    subscribe_data = json.dumps(self.body, default=str)
                    await websocket.send(subscribe_data)
                    while True:
                        try:
                            response = await asyncio.wait_for(websocket.recv(),timeout)
                            try:
                                if response != "pong":
                                    response = json.loads(response)
                            except:
                                print(traceback.format_exc())
                                continue
                            if response != 'pong':
                                UPBIT_INFO[response['cd'].replace("KRW-","")] = response['tp']
                                item = list(response.keys())
                            # print('UPBIT',UPBIT_INFO)
                                
                            count+=1
                            if count==1000:
                                count = 0
                                await websocket.send("ping")
                        except:
                            print(traceback.format_exc())
                            time.sleep(1)
                            break
            except:
                print(traceback.format_exc())
                time.sleep(10)
                timestamp ='' + str(int(dt.datetime.now().timestamp()))
                message=timestamp+'GET'+'/user/verify'
                url='wss://api.upbit.com/websocket/v1'
    def run(self):
        asyncio.run(self.upbit_ws_client())
th1 = TickerWebSocket()
th2 = UpbitWebSocket()
th1.start()
th2.start()
@app.get("/")
def hello():
    return{"hi":"hi"}

@app.get("/fetchPrice")
def fetchPrice():
    global ticker_list
    global UPBIT_INFO
    global BINANCE_INFO
    send_ticker_info_list={}
    for ticker in ticker_list:
        send_ticker_info_list[ticker] = {}
        send_ticker_info_list[ticker]['KRW'] = UPBIT_INFO[ticker]
        send_ticker_info_list[ticker]['USDT'] = BINANCE_INFO[ticker]
    return {"quote":send_ticker_info_list}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000, log_level="error") #log_lavel="info"
