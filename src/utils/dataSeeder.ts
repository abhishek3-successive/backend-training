interface MockDataItem {
    id : number,
    name : string,
    description : string,
};

const generateMockData = (): MockDataItem[] =>{
    const data : MockDataItem[] = [];
    for(let i = 1 ; i<=10; i++){
        data.push({
            id : i,
            name : `Item ${i}`,
            description : `Description for item ${i}`
        })
    }
    return data;
}
export {generateMockData}