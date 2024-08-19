function superbowlWin(record){
    const result =  record.find((year) => {
        return (
            year.result === "W" 
        )
    })
    return result ? result.year : undefined

}

