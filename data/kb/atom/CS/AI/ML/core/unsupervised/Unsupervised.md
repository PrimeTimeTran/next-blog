[[K-Means Clustering]]
No label
Look for similiarities vs dissimiliarities
Try to find underlying structure of data
Partition based clustering technique
![[k-means-clustering.png]]
**Works By**

1.  Randomly select centroids (center of cluster) for each cluster.
2.  Calculate the distance of all data points to the centroids.
3.  Assign data points to the closest cluster.
4.  Find the new centroids of each cluster by taking the mean of all data points in the cluster.
5.  Repeat steps 2,3 and 4 until all points converge and cluster centers stop moving.
    Fast & easy to interpret.
    Choose initial position of centroids.
    Number of clusters must be predetermined.
    [[DBScan Clustering]]
    Partition based clustering
    Artbitrary
    Density based spacial clustering of applications with noise.
    Main idea: Point belongs to a cluster if it is close to many points from that cluster.
    eps: The distance that specifies the neighborhoods. Two points are considered to be neighbors if the distance between them are less than or equal to eps.
    minPts: Minimum number of datapoints to define a cluster
    core point:
    border point:
    outlier:
    [[Principal Component Analysis]]
    [[Independent Component Analysis]]
