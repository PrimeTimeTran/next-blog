# [[Supervised]]

Data sets include their desired outputs or labels so that a function can calculate an error for any given prediction. The supervision part comes into play when a prediction is created, and an error is produced to change the function and learn the mapping. Supervised learning’s goal is to create a function that effectively generalizes over data it has never seen.
[[linear-regression]]
[[support-vector-machines-SVM]]
[[Naive Bayes]]
[[logistic-regression]]
[[k-nearest-neighbors-KNN]]
[[Decision Tree]]
[[random-forest]]
[[Gradient Boosted Trees]]

# [[reinforcement-learning|Reinforcement]]

With reinforcement learning, the algorithm tries to learn actions for a given set of states that lead to a goal state. Thus, errors aren’t flagged after each example but rather on receiving a reinforcement signal, like reaching the goal state. This process closely
resembles human learning, where feedback isn’t provided for every action, only when the situation calls for a reward.

# [[Unsupervised]]

Given rewards & punishments learn what actions to take in the future.
There are cases where a data set doesn’t have the desired output, so there’s no means of supervising the function. Instead, the process tries to segment the data set into “classes” so that each class has a segment of the data set with common features. Unsupervised learning aims to build a mapping function that classifies data based on features found within the data.
[[K-Means Clustering]]
[[DBScan Clustering]]
[[Principal Component Analysis]]
[[Independent Component Analysis]]
