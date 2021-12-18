FROM harddecode/whatsandromeda:latest

RUN git clone https://github.com/harddecode/WhatsAndromeda /root/WhatsAndromeda
WORKDIR /root/WhatsAndromeda/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
