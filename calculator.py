from tkinter import *
from tkinter import ttk

color0 = "#ffffff" # white
color1 = "#262624" # black 
color3 = "LightSteelBlue3"
color4=  "#d8dae6" #hash colour

window =Tk()
window.title('Rohan Calculate')
window.geometry('235x318')
window.configure(bg=color1)

style = ttk.Style(window)
style.theme_use("clam")

ttk.Separator(window, orient=HORIZONTAL).grid(row=0, columnspan=1, ipadx=280)

frame_score = Frame(window, width = 300 , height =56, bg =color1, padx =0 , pady =0)
frame_score.grid(row =1 , column=0, sticky=NW)

frame_buttons = Frame(window, width =300, height =340, bg =color1, padx=0, pady=0)
frame_buttons.grid(row =2 , column=0, sticky=NW)

#Functioms
def entering_values(event): #event means showing value on screen here/number
    global all_values

    all_values =all_values + str(event)
    value_text.set(all_values)
all_values=""
value_text=StringVar()

def clear_screen():
    global all_values

    all_values=""
    value_text.set("")

def calculate():
    global all_values
    result = str(eval(all_values)) # the eval function evaluates the “String” like a python expression and returns the result as an integer.
    value_text.set(result)
    all_values="" #reset all values after calculation


app_screen = Label(frame_score,textvariable=value_text, width =16, height =2, padx =7, anchor="e", bd=0, justify=RIGHT, font=('Ivy 18'),bg=color3, fg=color1)
app_screen.place(x=0, y=0,)

btn_1 = Button(frame_buttons, text="C",command=lambda:clear_screen(), width=11 ,height=2, bg=color4, fg=color1, font=("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
btn_1.place(x=0, y=0)
btn_2 = Button(frame_buttons, text="%", command=lambda:entering_values("%"), width=5 ,height=2, bg=color4, fg=color1, font=("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
btn_2.place(x=118, y=0)
btn_3 = Button(frame_buttons, text="/", command=lambda:entering_values("/"),width=5 ,height=2, bg=color4, fg=color1, font=("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
btn_3.place(x=177, y=0)


btn_4 = Button(frame_buttons, text="7", command=lambda:entering_values("7"),width=5 ,height=2, bg=color4, fg=color1, font=("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
btn_4.place(x=0, y=52)
btn_5 = Button(frame_buttons, text="8",command=lambda:entering_values("8"), width=5 ,height=2, bg=color4, fg=color1, font=("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
btn_5.place(x=59, y=52)
btn_6 = Button(frame_buttons, text="9", command=lambda:entering_values("9"),width=5 ,height=2, bg=color4, fg=color1, font=("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
btn_6.place(x=118, y=52)
btn_7 = Button(frame_buttons, text="*", command=lambda:entering_values("*"),width=5 ,height=2, bg=color4, fg=color1, font=("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
btn_7.place(x=177, y=52)

btn_8 = Button(frame_buttons, text="4", command=lambda:entering_values("4"),width=5 ,height=2, bg=color4, fg=color1, font=("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
btn_8.place(x=0, y=104)
btn_9 = Button(frame_buttons, text="5",command=lambda:entering_values("5"), width=5 ,height=2, bg=color4, fg=color1, font=("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
btn_9.place(x=59, y=104)
btn_10 = Button(frame_buttons, text="6",command=lambda:entering_values("6"), width=5 ,height=2, bg=color4, fg=color1, font=("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
btn_10.place(x=118, y=104)
btn_11 = Button(frame_buttons, text="-",command=lambda:entering_values("-"), width=5 ,height=2, bg=color4, fg=color1, font=("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
btn_11.place(x=177, y=104)

btn_12 = Button(frame_buttons, text="1", command=lambda:entering_values("1"),width=5 ,height=2, bg=color4, fg=color1, font=("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
btn_12.place(x=0, y=156)
btn_13 = Button(frame_buttons, text="2",command=lambda:entering_values("2"), width=5 ,height=2, bg=color4, fg=color1, font=("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
btn_13.place(x=59, y=156)
btn_14 = Button(frame_buttons, text="3",command=lambda:entering_values("3"), width=5 ,height=2, bg=color4, fg=color1, font=("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
btn_14.place(x=118, y=156)
btn_15 = Button(frame_buttons, text="+",command=lambda:entering_values("+"), width=5 ,height=2, bg=color4, fg=color1, font=("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
btn_15.place(x=177, y=156)

btn_16 = Button(frame_buttons, text="0",command=lambda:entering_values("0"), width=5 ,height=2, bg=color4, fg=color1, font=("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
btn_16.place(x=0, y=208)
btn_17 = Button(frame_buttons, text=".",command=lambda:entering_values("."), width=5 ,height=2, bg=color4, fg=color1, font=("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
btn_17.place(x=59, y=208)
btn_18 = Button(frame_buttons, text="=",command=lambda:calculate(), width=11 ,height=2, bg=color4, fg=color1, font=("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
btn_18.place(x=118, y=208)

window.mainloop()