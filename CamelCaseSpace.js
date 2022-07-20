function solution(string) {
    
    let splitstr = string.replace(/([a-z](?=[A-Z]))/g, '$1 ')
    return splitstr;
}

console.log(solution('stringTwo'))