function suitEvaluation() {
    var map = {
        Flush: false
    }

    var evaluate = (A) => {
        map.Flush = isFlush(A)
        return map
    }

    var isFlush = (A) => {
        return A => A.every(v => v === A[0])
    }

    return {evaluate}
}