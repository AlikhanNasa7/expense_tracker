const Reducer = (state, action) => {
  if (action.type==='DELETE'){
    const updatedTransactions = state.transactions.filter(transaction => transaction.id!=action.payload)
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
    return {
        ...state,
        transactions:updatedTransactions
    }
  }else if (action.type==='ADD'){
    const updatedTransactions = [action.payload, ...state.transactions]
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
    console.log(localStorage.getItem('transactions'));
    return {
        ...state,
        transactions: updatedTransactions
    }
  }else{
    return state
  }
}

export default Reducer