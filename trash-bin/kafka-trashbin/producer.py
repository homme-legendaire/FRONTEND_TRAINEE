from confluent_kafka import Producer


def delivery_report(err, msg):
    if err is not None:
        print(f"Message delivery failed: {err}")
    else:
        print(
            f"Message delivered to {msg.topic()} [{msg.partition()}] at offset {msg.offset()}"
        )


def produce_messages(topic):
    conf = {
        "bootstrap.servers": "localhost:9092",
    }

    producer = Producer(conf)

    for i in range(10):  # Sending 10 messages as an example
        message = f"Message {i}".encode("utf-8")
        producer.produce(topic, value=message, callback=delivery_report)

    producer.flush()


if __name__ == "__main__":
    topic_to_produce = "test_topic"
    produce_messages(topic_to_produce)
