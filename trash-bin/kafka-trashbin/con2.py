from confluent_kafka import Consumer, KafkaError


def consume_messages(consumer_id):
    conf = {
        "bootstrap.servers": "localhost:9092",
        "group.id": "test_group",
        "auto.offset.reset": "earliest",  # Start consuming from the beginning of the topic (you can change this if needed)
    }

    consumer = Consumer(conf)
    consumer.subscribe(["test_topic"])

    while True:
        msg = consumer.poll(1.0)

        if msg is None:
            continue
        if msg.error():
            if msg.error().code() == KafkaError._PARTITION_EOF:
                print(f"Consumer {consumer_id}: Reached end of partition")
            else:
                print(f"Consumer {consumer_id}: Error while consuming: {msg.error()}")
        else:
            print(
                f"Consumer {consumer_id}: Received message: {msg.value().decode('utf-8')}"
            )


if __name__ == "__main__":
    # Start two consumers in the same consumer group
    consume_messages(2)
