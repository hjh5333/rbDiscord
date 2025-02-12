const jobNameList = ['전사' , '마법사' , '궁수' ,'도적'];
const searchName = '전사스킬'
console.log('일asdadaasd치');
    const foundjob = jobNameList.find(job => searchName.includes(job));
    if (foundjob) {
        console.log(`직업 :: ${foundjob}`);
    }else
        console.log(`일치하는 직업없음`);


