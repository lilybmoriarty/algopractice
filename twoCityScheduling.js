/*
There are 2N people a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1].

Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.



Example 1:

Input: [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation:
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.


Note:

1 <= costs.length <= 100
It is guaranteed that costs.length is even.
1 <= costs[i][0], costs[i][1] <= 1000
*/

var twoCitySchedCost = function(costs) {
  let totalCost = 0;
  let cityA = 0;
  let cityB = 0;

  let sortedCosts = costs.sort((a, b) => {
    let first = Math.abs(a[0] - a[1]);
    let second = Math.abs(b[0] - b[1]);
    return second - first;
  });

  for (let i = 0; i < sortedCosts.length; i++) {
    let current = sortedCosts[i];

    if (cityA === costs.length / 2) {
      totalCost += current[1];
      cityB++;
    } else if (cityB === costs.length / 2) {
      totalCost += current[0];
      cityA++;
    } else if (current[0] <= current[1]) {
      totalCost += current[0];
      cityA++;
    } else {
      totalCost += current[1];
      cityB++;
    }
  }
  return totalCost;
};
