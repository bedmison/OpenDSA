.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-2013 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata::
   :author: Cliff Shaffer

.. odsalink:: DataStructures/huffman.css

.. slideconf::
   :autoslides: False

==============
Huffman Coding
==============

Huffman Coding
--------------

.. slide:: Coding

   * One can often gain an improvement in space requirements in exchange for a penalty in running time.

   * **Example: Files on Disk**
      *  Files not actively used might be compressed them to save space
      *  Can be uncompressed for use later, which costs some time, but only once.

.. slide:: Coding (2)

   * We often assign a set of items a unique code for each item.
   * ASCII codes are fixed length: 7 + 1 bits
      * In general, $n$ bits can store $2^n$ codes
   * An alternative is variable-length coding

   * The relative frequencies for eight selected letters ASCII.

      .. math::

         \begin{array}{|c|cccccccc|}
         \hline
         \textrm Letter & C & D & E & K & L & M & U & Z\\
         \textrm Frequency & 32 & 42 & 120 & 7 & 42 & 24 & 37 & 2\\
         \hline
         \end{array}


.. slide:: Huffman Coding

   * Huffman coding assigns codes to characters such that the length of the code depends on the relative
     frequency or weight of the corresponding character.

   * Variable length code

     * If the estimated frequencies for letters match the actual frequency found in an encoded message,
       then the length of that message will typically be less


.. slide:: Huffman Coding Trees

   .. inlineav:: huffmanBuildCON ss
      :long_name: Huffman Coding Tree Build Slideshow
      :links: DataStructures/huffman.css AV/Binary/huffmanCON.css
      :scripts: DataStructures/huffman.js AV/Binary/huffmanBuildCON.js
      :output: show

.. slide:: .

   .

.. slide:: Assigning Codes

   * Assign 0 to left node and 1 to the right.

   .. inlineav:: huffmanLabelCON ss 
      :long_name: Huffman Coding Tree Slideshow: Label Edges
      :links: DataStructures/huffman.css AV/Binary/huffmanCON.css
      :scripts: DataStructures/huffman.js AV/Binary/huffmanLabelCON.js
      :output: show

.. slide:: .

   .

.. slide:: Using Codes

   * Codes for each letter are the bits associated to the edges between the root and the leaf

   .. inlineav:: huffmanCodesCON ss 
      :long_name: Huffman Coding Tree Setting Codes Slideshow
      :links: DataStructures/huffman.css AV/Binary/huffmanCON.css
      :scripts: DataStructures/huffman.js AV/Binary/huffmanCodesCON.js
      :output: show


.. slide:: .

   .

.. slide:: Decoding

   .. inlineav:: huffmanDecodeCON ss
      :long_name: Huffman Coding Tree Slideshow: Decoding
      :links: DataStructures/huffman.css AV/Binary/huffmanCON.css
      :scripts: DataStructures/huffman.js AV/Binary/huffmanDecodeCON.js
      :output: show

.. slide:: .

   .

.. slide:: Tree vs. Trie (1)

   .. inlineav:: TreeTimelineCON ss
      :long_name: Tree timeline Slideshow
      :links: AV/Development/TreeTrieCON.css
      :scripts: AV/Development/TreeTimelineCON.js
      :output: show

.. slide:: .

   .


.. slide:: Tree vs. Trie (2)

   .. inlineav:: TrieTimelineCON ss
      :long_name: Trie timeline Slideshow
      :links: AV/Development/TreeTrieCON.css
      :scripts: AV/Development/TrieTimelineCON.js
      :output: show

.. slide:: .

   .
