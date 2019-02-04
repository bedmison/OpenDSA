.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-2013 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata::
   :author: Cliff Shaffer

.. slideconf::
   :autoslides: False

===============
Math Background
===============

Math Background
---------------

.. slide:: Topics (see Chapter 3)

   | Set concepts and notation
   | Logarithms
   |    To store codes for :math:`n` objects required :math:`\log n`
        bits. :math:`n` bits can represent :math:`2^n` objects
   |    You can cut :math:`n` objects in half :math:`\log n` times
   |    :math:`n = 2^{\log_2 n}`
   | Recursion
   | Induction Proofs
   | Summations
   | Recurrence Relations
   | Estimation


.. slide:: Estimation Techniques

   | Known as "back of the envelope" or "back of the napkin"
     calculation
   |   1. Determine the major parameters that affect the problem.
   |   2. Define an equation that relates the parameters to the
          problem.
   |   3. Select values for the parameters, and apply the equation to
          yield an estimated solution.


.. slide:: Estimation Example

   | How many library bookcases does it take to store books totaling
     one million pages?

   | Estimate
   |   - Pages/inch
   |   - Feet/shelf
   |   - Shelves/bookcase

.. slide:: Another Estimation Example from Enrico Fermi

   | How many piano tuners are there in the Greater Chicago area?

   | What data or assumptions would you need to make to answer this question?

.. slide:: Another Estimation Example from Enrico Fermi

   | How many piano tuners are there in the Greater Chicago area?

   Assume:

   | – 10,000,000 people in Chicago (9.9 M in 2016)
   | – 4 persons in each house
   | – 25% of family own a piano, and all will be tuned
   | – Tuning is done once a year
   | – Need 2 hours to tune
   | – A tuner works 8 hours/day, 5 days/week and 50 weeks/year

.. slide:: Another Estimation Example from Enrico Fermi

   | How many piano tuners are there in the Greater Chicago area?

   | – 4 persons in each house = 2.5M Households
   | – 25% of family own a piano = 625,000 pianos
   | – Tuning is done once a year = 625,000 tunings
   | – Need 2 hours to tune
   | – A tuner works 8 hours/day, 5 days/week and 50 weeks/year = 1000 tunings/year

   | - 650,000 tunings/(4*2*5*50) = 650 piano tuners


