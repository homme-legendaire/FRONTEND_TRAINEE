from confluent_kafka import Producer
import json

# 카프카 서버 설정
bootstrap_servers = "localhost:9092"
topic = "test_topic"

# Producer 설정
conf = {"bootstrap.servers": bootstrap_servers}

# Producer 객체 생성
producer = Producer(conf)

# 전송할 JSON 메시지 생성
message = {"test": "6974"}

# JSON 메시지를 카프카에 전송
producer.produce(topic, key="0xc74", value=json.dumps(message))

# 메시지 전송 처리
producer.flush()
