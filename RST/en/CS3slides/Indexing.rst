.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-2013 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata::
   :author: Cliff Shaffer

.. slideconf::
   :autoslides: False

========
Indexing
========

Indexing
--------

.. slide:: Indexing

   * Goals:
      * Store large files
      * Support multiple search keys
      * Support efficient insert, delete, and range queries


.. slide:: Files and Indexing

   * **Entry sequenced file**: Order records by time of insertion.
      * Search with sequential search

   * **Index file**: Organized, stores pointers to actual records.
      * Could be organized with a tree or other data structure.


.. slide:: Keys and Indexing

   * **Primary Key** : A unique identifier for records.  May be
     inconvenient for search.

   * **Secondary Key**: An alternate search key, often not unique for
     each record.  Often used for search key.


.. slide:: Linear Indexing (1)

   * **Linear index**: Index file organized as a simple sequence of
     key/record pointer pairs with key values are in sorted order.

   * Linear indexing is good for searching variable-length records.

   .. inlineav:: varindexCON ss
      :long_name: Simple linear index Slideshow
      :links: AV/Indexing/linearIndexingCON.css
      :scripts: AV/Indexing/varindexCON.js
      :output: show


.. slide:: Linear Indexing (2)

   * If the index is too large to fit in main memory, a second-level index
     might be used.

   .. inlineav:: linindexCON ss
      :long_name: Two-level linear index Slideshow
      :links: AV/Indexing/linearIndexingCON.css
      :scripts: AV/Indexing/linindexCON.js
      :output: show
      :align: justify


.. slide:: Tree Indexing (1)

   * Linear index is poor for insertion/deletion.

   * Tree index can efficiently support all desired operations:
      * Insert/delete
      * Multiple search keys (multiple indices)
      * Key range search


.. slide:: Tree Indexing (2)

   .. inlineav:: pagedBSTCON ss
      :long_name: Paged BST Slideshow
      :links: AV/Indexing/treeIndexingCON.css
      :scripts: AV/Indexing/pagedBSTCON.js
      :output: show


.. slide:: Tree Indexing (3)

   * Difficulties when storing tree index on disk:
      * Tree must be balanced.
      * Each path from root to leaf should cover few disk pages.

.. slide:: Tree Indexing (4)

   .. inlineav:: rebalanceBSTCON ss
      :long_name: Paged BST With Disk Accesses Slideshow
      :links: AV/Indexing/treeIndexingCON.css
      :scripts: AV/Indexing/rebalanceBSTCON.js
      :output: show


.. slide:: 2-3 Tree

   * A 2-3 Tree has the following properties:
      #. A node contains one or two keys
      #. Every internal node has either two children (if it contains
         one key) or three children (if it contains two keys).
      #. All leaves are at the same level in the tree, so the tree is
         always height balanced.

   * The 2-3 Tree has a search tree property analogous to the BST.


.. slide:: 2-3 Tree Example

   * The advantage of the 2-3 Tree over the BST is that it can be
     updated at low cost.

   .. odsafig:: Images/23Tree.png
      :width: 800
      :align: center
      :capalign: justify
      :figwidth: 90%
      :alt: A 2-3 Tree


.. slide:: 2-3 Tree Insertion (1)

   .. inlineav:: simpleInsertCON ss
      :long_name: 2-3 Tree Insert Slideshow
      :links: AV/Indexing/twoThreeTreeCON.css
      :scripts: AV/Indexing/twoThreeTreeCON.js AV/Indexing/simpleInsertCON.js
      :output: show


.. slide:: 2-3 Tree Insertion (2)

   .. inlineav:: promoteCON ss
      :long_name: 2-3 Tree Insert Promotion Slideshow
      :links: AV/Indexing/twoThreeTreeCON.css
      :scripts: AV/Indexing/twoThreeTreeCON.js AV/Indexing/promoteCON.js
      :output: show


.. slide:: 2-3 Tree Insertion (3)

   .. inlineav:: splitCON ss
      :long_name: 2-3 Tree Insert Split Slideshow
      :links: AV/Indexing/twoThreeTreeCON.css
      :scripts: AV/Indexing/twoThreeTreeCON.js AV/Indexing/splitCON.js
      :output: show


.. slide:: B-Trees (1)

   * The B-Tree is an extension of the 2-3 Tree.

   * The B-Tree is now the standard file organization for applications
     requiring insertion, deletion, and key range searches.


.. slide:: B-Trees (2)

   #. B-Trees are always balanced.
   #. B-Trees keep similar-valued records together on a disk page,
      which takes advantage of locality of reference.
   #. B-Trees guarantee that every node in the tree will be full at
      least to a certain minimum percentage.  This improves space
      efficiency while reducing the typical number of disk fetches
      necessary during a search or update operation.

   .. odsafig:: Images/BTexamp.png
      :width: 600
      :align: center
      :capalign: justify
      :figwidth: 90%
      :alt: A B-tree of order four


.. slide;: B-Tree Definition

   * A B-Tree of order :math:`m` has these properties:
      * The root is either a leaf or has two children.
      * Each node, except for the root and the leaves, has between
        :math:`\lceil m/2 \rceil` and :math:`m` children.
      * All leaves are at the same level in the tree, so the tree is
        always height balanced.

   * A B-Tree node is usually selected to match the size of a disk
     block.
      * A B-Tree node could have hundreds of children.


.. slide:: B-Tree Search

   * Generalizes search in a 2-3 Tree.
      #. Do binary search on keys in current node.  If search key is
         found, then return record.  If current node is a leaf node
         and key is not found, then report an unsuccessful search.
      #. Otherwise, follow the proper branch and repeat the process.


.. slide:: B+-Trees

   * The most commonly implemented form of the B-Tree is the B+-Tree.

   * Internal nodes of the B+-Tree do not store record -- only key
     values to guide the search.

   * Leaf nodes store records or pointers to records.

   * A leaf node may store more or less records than an internal node
     stores keys.


.. slide:: B+-Tree Example

   .. odsafig:: Images/BPexamp.png
      :width: 800
      :align: center
      :capalign: justify
      :figwidth: 90%
      :alt: Example of a :math:`\mathrm{B}^+` tree.

   * In this example, an internal node can have 2 to 4 children
   * A leaf node can hold 3 to 5 keys
   * To find value of 33, start at root, which is just a placeholder. Actual value is at leaf.

.. slide:: B+-Tree Insertion

   .. odsafig:: Images/BPins.png
      :width: 600
      :align: center
      :capalign: justify
      :figwidth: 90%
      :alt: Examples of :math:`\mathrm{B}^+` tree insertion.


.. slide:: B+-Tree Insertion - what happened?

    * (a) B+ tree containing five records.

    * (b) The result of inserting a record with key value 50 into the tree of (a). The leaf node splits, causing creation of the first internal node.

    * (c) The B+ tree of (b) after further insertions.

    * (d) The result of inserting a record with key value 30 into the tree of (c). The second leaf node splits, which causes the internal node to split in turn, creating a new root.

.. slide:: B+-Tree Deletion (1)

   .. odsafig:: Images/BPexamp.png
      :width: 800
      :align: center
      :capalign: justify
      :figwidth: 90%
      :alt: Example of a :math:`\mathrm{B}^+` tree.

   * Delete 18

   .. odsafig:: Images/BPsimDel.png
      :width: 800
      :align: center
      :capalign: justify
      :figwidth: 90%
      :alt: Simple deletion from a :math:`\mathrm{B}^+` tree.


.. slide:: B+-Tree Deletion (1)

    * If deleting the value reduces the value leaves the leaf still at least half full, just remove the value.

.. slide:: B+-Tree Deletion (2)

   .. odsafig:: Images/BPexamp.png
      :width: 800
      :align: center
      :capalign: justify
      :figwidth: 90%
      :alt: Example of a :math:`\mathrm{B}^+` tree.

   * Delete 12

   .. odsafig:: Images/BPborrow.png
      :width: 800
      :align: center
      :capalign: justify
      :figwidth: 90%
      :alt: Deletion from a :math:`\mathrm{B}^+` tree via borrowing from
            a sibling.

.. slide:: B+-Tree Deletion (1)

    * If deleting the value reduces the value leaves the leaf below the minimum threshold (the **underflow**),
      we must do something to keep it sufficiently full.

    * **First choice**: Look at the node's adjacent siblings to determine if they have spare records.
        If so, transfer enough records from the sibling so that both nodes have about the same number of records.

.. slide:: B+-Tree Deletion (3)

   .. odsafig:: Images/BPexamp.png
      :width: 800
      :align: center
      :capalign: justify
      :figwidth: 90%
      :alt: Example of a :math:`\mathrm{B}^+` tree.

   * Delete 33

   .. odsafig:: Images/BPmerge.png
      :width: 800
      :align: center
      :capalign: justify
      :figwidth: 90%
      :alt: Deletion from a :math:`\mathrm{B}^+` tree via collapsing siblings

.. slide:: .

   .

       * **Second choice**: Under-full node must give up its records to a sibling and be removed from the tree.


.. slide:: B-Tree Space Analysis (1)

   * B+-Trees nodes are always at least half full.

   * The B*-Tree splits two pages for three, and combines three pages into
     two. In this way, nodes are always 2/3 full.

   * Asymptotic cost of search, insertion, and deletion of nodes from
     B-Trees is :math:`\Theta(log n)`.
   * Base of the log is the (average) branching factor of the tree. In practice, DB applications
   use extremely high branching factors (>100) resuling in very shallow trees.


.. slide:: B-Tree Space Analysis (2)

   * Example: Consider a B+-Tree of order 100 with leaf nodes
     containing 100 records.
   * 1 level B+-tree: 100 records
   * 2 level B+-tree: :math:`100 \leq n \leq 10,000` records
   * 3 level B+-tree: :math:`5,000 \leq n \leq 1M` records
   * 4 level B+-tree: :math:`250,000 \leq n \leq 100M` records

   * Ways to reduce the number of disk fetches:
      * Keep the upper levels in memory.
      * Manage B+-Tree pages with a buffer pool.


.. slide:: B-Trees: The Big Idea

   * B-trees are really good at managing a sorted list

      * They break the list into manageable chunks
      * The leaves of the B+-tree form the list
      * The internal nodes of the B+-tree merely help find the right chunk
