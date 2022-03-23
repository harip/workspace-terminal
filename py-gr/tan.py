import matplotlib.pyplot as plt 
import matplotlib.animation as animation 
import numpy as np
from math import *

fig = plt.figure() 
ax = plt.axes(xlim=(0, 50), ylim=(0,100))   

ax1, = ax.plot([], [], 'ro')
ax2, = ax.plot([], [], 'ro')

# animation function 
def animate_line1(i): 
    t = 0.1*i
    x = t  

    ax1.set_data(x, t * tan(1.50))
    ax2.set_data(x, t * tan(1))

    print(x, t * tan(1.55))

    return ax1,ax2
 
anim = animation.FuncAnimation(fig, animate_line1,frames=100, interval=10 ) 
plt.show()   