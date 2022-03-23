import matplotlib.pyplot as plt 
import matplotlib.animation as animation 
from math import *

fig = plt.figure() 
ax = plt.axes(xlim=(0, 50), ylim=(-1.1, 1.1))  

# animation function 
def animate(i): 
    # t is a parameter 
    t = 0.1*i   
    x = t 
    y = sin(t)  
    return ax.plot(x, y, 'ro')

# call the animator	 
anim = animation.FuncAnimation(fig, animate,frames=500, interval=10, blit=True) 
plt.show() 