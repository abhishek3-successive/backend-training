interface RandomData {
    id : number;
    value : string;
}

const generateRandomData = (): RandomData =>{
    return{
        id : Math.floor(Math.random()*1000),
        value : 'Sample Data'
    };
};

export {generateRandomData}