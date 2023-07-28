from confluent_kafka import Producer
import json

# 카프카 서버 설정
# bootstrap_servers = "3.39.192.44:9092"
bootstrap_servers = "localhost:9092"
topic = "kafka_topic"

# Producer 설정
conf = {"bootstrap.servers": bootstrap_servers}

# Producer 객체 생성
producer = Producer(conf)

# 전송할 JSON 메시지 생성
message = {"dex": "5877"}

# JSON 메시지를 카프카에 전송
try:
    producer.produce(topic, key="9ch48", value=json.dumps(message))
    print(f"Sent message {message}")
except Exception as e:
    print(f"Error while sending message: {e}")


# 메시지 전송 처리
producer.flush()
