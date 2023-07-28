from confluent_kafka import Consumer, KafkaError, TopicPartition

# Kafka 컨슈머 설정
bootstrap_servers = "localhost:9092"
group_id = "group_id_2"
topic_name = "test_topic"

# Kafka 컨슈머 생성
consumer_conf = {
    "bootstrap.servers": bootstrap_servers,
    "group.id": group_id,
    "auto.offset.reset": "earliest",  # 컨슈머 시작 시 가장 오래된 오프셋부터 시작
}

consumer = Consumer(consumer_conf)


# 수동으로 파티션 할당
def assign_partitions(partition):
    partition_to_assign = TopicPartition(topic_name, partition)
    consumer.assign([partition_to_assign])


# 메시지 소비 함수
def consume_messages():
    try:
        while True:
            msg = consumer.poll(1.0)  # 1초 동안 메시지를 폴링합니다.
            if msg is None:
                continue
            if msg.error():
                if msg.error().code() == KafkaError._PARTITION_EOF:
                    # 파티션의 끝에 도달한 경우
                    print(f"Reached the end of partition {msg.partition()}")
                else:
                    print(f"Error while consuming message: {msg.error()}")
            else:
                print(
                    f"Topic: {msg.topic()}, Partition: {msg.partition()}, Offset: {msg.offset()}, Value: {msg.value().decode('utf-8')}"
                )
    except KeyboardInterrupt:
        pass
    finally:
        consumer.close()


try:
    # 특정 파티션으로 메시지를 수신하려면 파티션 값을 설정합니다.
    partition_to_receive = "dex"  # 수신할 파티션 번호
    assign_partitions(partition_to_receive)

    # 메시지 소비 시작
    consume_messages()
except Exception as e:
    print(f"Error while consuming messages: {e}")
