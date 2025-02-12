const skillCommand = require('./skillTree');
const settingEmbed = require('../util/setEmbed');
let dataInfo = require('../info.json');
1
module.exports = (message) => {
    let jobNameList = ['전사' , '법사' , '궁수' ,'도적'];
    let partyQuestList = [ '월묘' , '커파', '루파' , '올비'];
    console.log('요청 메시지 '+ message.content)
    let embedTitle = '';
    let embedDescription = '';
    let embedBool = false;
    

    if (message.author.bot){
        return; // 봇이 보낸 메시지는 무시
    } 

    if (message.content.match(/^!(스킬|전사|법사|궁수|도적)(스킬)?$/) ){
        embedBool = true;
        embedTitle = message.content.replace('!','');
        embedDescription = '각 직업별 1~2차 스킬트리 정보입니다.';
        const foundJob = jobNameList.find(job => message.content.includes(job));
        console.log(foundJob);
        if (foundJob != undefined){
            info = dataInfo['skillTree'].find(skill => skill.name.includes(foundJob));
            if (info){
                embedDescription = `${foundJob} 1~2차 스킬트리 정보입니다.`;
            }else{
                message.channel.send('존재하지 않는 명령어 입니다.\n [ !명령어 ]를 통해 명령어 조회가 가능합니다.');
            }
        }else{
            info = dataInfo['skillTree'];
        }
        
        // console.log('🔍 foundJob:', foundJob || 'foundJob == None');
        // console.log('🔍 embedTitle:', embedTitle);
        // console.log('🔍 embedDescription:', embedDescription);
        // console.log('🔍 info:', info);
    }
    if (message.content.match(/!.*퀘.%*/) || message.content.match(/!.*퀘스트.%*/)){
        embedBool = true;
        embedTitle = message.content;
        const foundJob = jobNameList.find(job => message.content.includes(job));
        embedDescription = '돈이 되는 퀘스트 정보입니다.';
    }

    if (embedBool === true){
        settingEmbed(info,embedTitle,embedDescription)
            .then(embed => message.channel.send({ embeds: [embed] }))
            .catch(err => {
                        console.error('❌ Embed 생성 중 에러 발생:' , err);
                        console.log(err)});
        
    }else{
        if (message.content.match(/^![^\s!]+/)){
            message.channel.send('존재하지 않는 명령어 입니다.\n [ !명령어 ]를 통해 명령어 조회가 가능합니다. \n ex) ::: !스킬');
        }
        
    }
}
