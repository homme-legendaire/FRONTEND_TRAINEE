from confluent_kafka import Producer
import json

# Kafka 프로듀서 설정
bootstrap_servers = "localhost:9092"
topic_name = "test_topic"


# 특정 파티션으로 메시지 전송하는 함수
def send_message_to_partition(partition, message):
    producer_conf = {
        "bootstrap.servers": bootstrap_servers,
        "partitioner": "consistent",  # 파티션 선택 전략 (consistent: 일관성 있는 파티션 선택)
    }

    producer = Producer(producer_conf)

    try:
        # 파티션을 지정하여 메시지 전송
        producer.produce(
            topic=topic_name, value=json.dumps(message), partition=partition
        )
        producer.flush()  # 메시지 전송 완료를 확인하기 위해 flush()를 호출
        print(f"Sent message to partition {partition}: {message}")
    except Exception as e:
        print(f"Error while sending message: {e}")


try:
    # 메시지 생성 및 전송
    message_to_send = {"test": "6974"}
    partition_to_send = 1  # 전송할 파티션 이름
    send_message_to_partition(partition_to_send, message_to_send)
except KeyboardInterrupt:
    pass
