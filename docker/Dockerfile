FROM python:3.9-slim-bookworm


LABEL authors="JEREMY"

COPY --from=ghcr.io/astral-sh/uv:0.7.2 /uv /uvx /bin/

ADD  /chat-bot-v1 /chat-bot-v1
WORKDIR /chat-bot-v1

RUN pip install -r requirements.txt

CMD ["rasa", "run", "--enable-api"]