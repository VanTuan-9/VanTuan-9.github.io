const arr = [1,5,2,4,3,2,4,5];
const countElement = arr.reduce((x,y) => {
        if(y in x)   x[y] +=1;
        else x[y] = 1;
        return x;
    }
    ,{}
    );
console.log(countElement);