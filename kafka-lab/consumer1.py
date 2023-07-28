from confluent_kafka import Consumer, KafkaException
import json

# Kafka 서버 및 토픽 설정
# bootstrap_servers = "3.39.192.44:9092"
bootstrap_servers = "localhost:9092"
topic = "test_topic"
group_id = "my_consumer_group2"


def consume_message(consumer):
    # Kafka에서 메시지 수신
    while True:
        msg = consumer.poll(1.0)  # 1초 대기 후 메시지 수신

        if msg is None:
            continue
        if msg.error():
            if msg.error().code() == KafkaException._PARTITION_EOF:
                # 모든 파티션의 메시지를 수신한 경우
                continue
            else:
                # 다른 오류가 있는 경우
                print(f"Consumer error: {msg.error()}")
                break

        # 수신한 메시지 처리
        if msg.key() is not None:
            key = msg.key().decode("utf-8")
        else:
            key = None
        value = json.loads(msg.value().decode("utf-8"))
        print_assigned_partitions(consumer)
        print(f"Received message: Key={key}, Value={value}")

    # Consumer 종료
    consumer.close()


# Kafka Consumer 설정
conf = {
    "bootstrap.servers": bootstrap_servers,
    "group.id": group_id,
    "auto.offset.reset": "latest",  # 가장 이른 오프셋부터 메시지 수신: earliest
}
consumer = Consumer(conf)

# 토픽 구독
consumer.subscribe([topic])


# 할당된 파티션 정보 출력
def print_assigned_partitions(consumer):
    partitions = consumer.assignment()
    print("Assigned partitions:", partitions)


print_assigned_partitions(consumer)

# 메시지 수신 및 처리
consume_message(consumer)
