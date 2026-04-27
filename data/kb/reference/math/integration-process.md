# 1. Find the area underneath the curve

![[int-1.png]]

# 2. Could over approximate:

![[int-2.1.png]]

# 2.2 Could under approximate:

![[int-2.2.png]]

# 3. Adding more squares makes it more correct.

![[int-3.1.png]]

# 3.1 Adding more squares makes it more correct with under approximation.

![[int-3.2.png]]

# 4.1 Adding more squares makes it more correct with approximation.

![[int-4.2.png]]

# 4.1 Adding more squares makes it more correct with under approximation.

![[int-4.1.png]]

# 5. Adding many squares is most accurate

![[int-5.png]]

## Draw integral in

https://www.geogebra.org/calculator

f(x)=If(0≤x≤1, x^(2))

n=2
Δx=((1)/(n))

<!-- under estimate -->

rects = Sequence(Polygon((k*Δx,0),(k*Δx,f(k*Δx)),((k+1)*Δx,f(k*Δx)),((k+1)*Δx,0)), k, 0, n-1)

<!-- Over estiamte -->

rects=Sequence(Polygon((k Δx,0),(k Δx,f((k+1) Δx)),((k+1) Δx,f((k+1) Δx)),((k+1) Δx,0)),k,0,n-1)
