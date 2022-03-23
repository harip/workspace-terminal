import matplotlib.pyplot as plt 
import matplotlib.animation as animation 
import numpy as np
from math import *

directions = [1,-1]
rads = np.arange(-0.5, 1.50, 0.05)  
fig = plt.figure() 
ax = plt.axes(xlim=(-100, 100), ylim=(-500,500))   

allAxs=()
for direction in directions:
    axs = tuple([ (ax.plot([], [], 'ro')[0],direction,rad) for rad in rads ] )
    allAxs += axs  

# animation function 
def animate_line1(i): 
    t = 0.5*i   

    for ax in allAxs:
        x = t * ax[1]
        y = t * tan(ax[2]) 
        ax[0].set_data(x, y)

    return tuple([ ax[0] for ax in allAxs ])
 
anim = animation.FuncAnimation(fig, animate_line1,frames=100, interval=10, blit=True) 
plt.show()   