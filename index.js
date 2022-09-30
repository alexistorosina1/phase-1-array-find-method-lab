const record = [
    { year: "2015", result: "W" },
    { year: "2016", result: "N/A" },
    { year: "2017", result: "L" },
]
function superbowlWin(record) {
    let dub = record.find((arr) => arr.result === "W")
    if(dub){
        return dub.year
    }
}
