const { EmbedBuilder } = require('discord.js');
// const {getChatGptResponse} = require('./gptapi');

module.exports = async (message , jobName = null) => {
    if (message.content.includes('스킬') && jobName === null) {
        const skillEmbed = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle('📜 스킬 정보')
            .setDescription('각 직업별 1~2차 스킬트리 정보입니다.')
            .setThumbnail('https://i.imgur.com/a1b2c3d.png')
            .addFields(
                { name : "전사" ,value : "👉 검사 : URL 필요\n" +
                                        "👉 파이터 : URL 필요\n" +
                                        "👉 스피어맨 : URL 필요\n" +
                                        "👉 페이지 : URL 필요" 
                 },
                { name : "법사" ,value : "👉 매지션 : URL 필요\n" +  
                                        "👉 썬콜 : https://arca.live/b/mapleland/125266579\n" +
                                        "👉 불독 : URL 필요\n" +
                                        "👉 클레릭 : URL 필요"
                },
                { name : "도적" ,value : "👉 로그 : URL 필요\n" +  
                                        "👉 표도 : https://arca.live/b/mapleland/117238958\n" +
                                        "👉 시프 : URL 필요"
                },
                { name : "궁수" ,value : "👉 아처 : URL 필요\n" +
                                        "👉 헌터 : URL 필요\n" +
                                        "👉 사수 : URL 필요"
                }
                                        
            )
            .setFooter({ text: '좀 더 상세한 정보를 원하신다면 정확한 커맨드를 입력해주세요!', iconURL: 'https://example.com/footer_icon.png' });

        message.channel.send({ embeds: [skillEmbed] });
        console.log(skillEmbed)
    }else{

    }
};