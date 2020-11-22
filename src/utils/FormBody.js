/*
 * @Author: puck.solo 
 * @Date: 2017-10-07 14:32:14 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2020-11-22 11:18:13
 */
module.exports = (details) => {
    let formData = [];
    for (const property in details) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(details[property]);
      formData.push(`${encodedKey}=${encodedValue}`);
    }
    return formData.join('&');
  };
