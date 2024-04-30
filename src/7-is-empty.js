export const isEmpty = (stringArrayOrObject) => {

  if (stringArrayOrObject.length === 0 || Object.keys(stringArrayOrObject).length === 0) {
    return true
  }
  else { 
    return false
  }
}
