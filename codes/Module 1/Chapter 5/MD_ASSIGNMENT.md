# Adder Circuit
### Aim:
The objective of this experiment is to design and analyze different adder circuits. You should make half adder, full adders, and multi-bit adders.
### Theory:
#### Half Adder:
![Half Adder](Half_Adder.svg.png)
A half adder adds two 1-bit binary numbers A and B to generate a 1-bit SUM (S) and a 1-bit CARRY (C) as output. The carry is theoretically carried on to the next bit position. The final sum numerically equals 2C + S. The simplest half-adder design, shown in the picture, incorporates an XOR gate for S and an AND gate for C. Half adders cannot be composed to produce larger bit adders as they lack a carry-in input. The outputs S and C can be expressed as logical functions of input variables A,B as follows:
###### Truth table
|A|B|CARRY|SUM|
|-|-|-----|---|
|0|0|0|0|
|0|1|0|1|
|1|0|0|1|
|1|1|1|0|
#### Full Adder:
![Full Adder](Full_Adder.svg.png)
A full adder adds two 1-bit binary numbers along with a carry brought in and produces a sum and carry out as ouputs.1-bit full adder adds three 1-bit numbers, often written as A, B, and Cin, where A and B are the operands, and Cin is a bit carried in from an addition.Circuit produces a 2-bit output sum typically represented by the signals Cout and S, where the sum numerically equals 2Cout + S . A full adder can be implemented in many different ways using custom transistor-level circuits or using other gates.
###### Truth table
|A|B|CIN|COUT|SUM|
|-|-|---|----|---|
|0|0|0|0|0|
|1|0|0|0|1|
|0|1|0|0|1|
|1|1|0|1|0|
|0|0|1|0|1|
|1|0|1|1|0|
|0|1|1|1|0|
|1|1|1|1|1|
#### Ripple Carry Adder:
![Ripple](ripple_carry_adder.svg.png)
Multiple full adders can be used to create adders of greater bit lengths. Each full adder uses the Cout of the previous adder as its Cin. This kind of adder is a ripple carry adder, since the carry bits "ripple" through the full adder stages. Note that the first (and only the first) full adder may be replaced by a half adder.
### Procedure:
1. First, make a 1-bit half-adder circuit and test it with different inputs. You should also try giving time-varying waves as inputs and anlyze the change in the outputs. Read the manual page carefully to learn how this can be done.
2. Next, design 1-bit full adder circuit and test it out similarly. Feel free to try other implementations of full-adder circuits.
3. Save the full adder circuit. You can now load it as a block and connect them to make larger adders.
4. Make a 4-bit adder by connecting four full adders. Study its output for different kinds of inputs.
5. There is an import feature, which lets you construct building blocks. Click on import and then click on circuit board to see the imported block. For more details, refer import section in manual.