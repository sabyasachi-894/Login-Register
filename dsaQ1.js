function leastFrequent(arr, n)
    {
            
        // Sorting the array
        arr.sort();
        
        // finding the min & max frequency using 
        
        let min_count = n+1, res = -1;
        let curr_count = 1;
            
        for (let i = 1; i < n; i++) {
            if (arr[i] == arr[i - 1])
                curr_count++;
            else {
                if (curr_count < min_count) {
                    min_count = curr_count;
                    res = arr[i - 1];
                }
  
                curr_count = 1;
            }
        }
        
        // If last element is least frequent
        if (curr_count < min_count)
        {
            min_count = curr_count;
            res = arr[n - 1];
        }
        
        
        
        return res;
    }
  
  
  function maxFrequent(arr, n)
    {
            
        // Sorting the array
        arr.sort();
        
        // finding the max frequency using 
        
        let max_count = 0, res = -1;
        let curr_count = 1;
            
        for (let i = 1; i < n; i++) {
            if (arr[i] == arr[i - 1])
                curr_count++;
            else {
                if (curr_count > max_count) {
                    max_count = curr_count;
                    res = arr[i - 1];
                }
  
                curr_count = 1;
            }
        }
        
        // If last element is max frequent
        if (curr_count > max_count)
        {
            max_count = curr_count;
            res = arr[n - 1];
        }
        
        
        
        return res;
    }
// Driver code
  
        let arr = [1, 3, 2, 1, 2, 2, 3, 1];
        let n = arr.length;
        console.log(leastFrequent(arr, n));
        console.log(maxFrequent(arr, n));