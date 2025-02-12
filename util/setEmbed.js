const { EmbedBuilder } = require('discord.js');
const {  MessageAttachment, MessageEmbed } = require('discord.js');
const divisionInfo = require('../common/divisionInfo.js');
const fs = require('fs');

const settingEmbed = async (info,title,desc) => {
    const infoEmbed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle(`📜 ${title} 정보`)
        .setDescription(`${desc}`)
        .setThumbnail('https://example.com/footer_icon.png')
        .addFields(info)
        .setFooter({ text: '좀 더 상세한 정보를 원하신다면 정확한 커맨드를 입력해주세요!', iconURL: 'https://example.com/footer_icon.png' });
    console.log(infoEmbed)
    return infoEmbed;
}

module.exports = settingEmbed ;
