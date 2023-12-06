import { motion } from "framer-motion";
import { useState } from "react";
import Programs from "../components/Programs";

const ProjectSection = () => {
    const [currTab, setTab] = useState(0);
    
    let projects = [
        { id: 0, title: 'SneakyQueens', fileName: 'queens.java', lang: 'Java', program: 
        `import java.util.*;

        public class SneakyQueens
        {
          public static boolean allTheQueensAreSafe(ArrayList coordinateStrings, int boardSize)
          {
            // Main boolean and hashsets for spaces that are not safe
            boolean safe = true;
            HashSet <Integer> unsafeRow = new HashSet <Integer>();
            HashSet <Integer> unsafeCol = new HashSet <Integer>();
            HashSet <Integer> unsafeDiag = new HashSet <Integer>();
            HashSet <Integer> unsafeDiagNeg = new HashSet<Integer>();
            HashSet <Integer> unsafeDiagB = new HashSet<Integer>();
        
            // Loop through each queen in the array list
            for (int i = 0; i < coordinateStrings.size(); i++)
            {
              // Declarations, mult used for horner's rule and isChar when we hit columns
              int length = (coordinateStrings.get(i)).length();
              int row = 0;
              int column = 0;
              boolean isChar = false;
              int mult = 1; // Loop through the string backwards to use horner's rule
              for (int j = length - 1; j >= 0; j--)
              {
                  char current = (coordinateStrings.get(i)).charAt(j);
                  int currInt = (int) current;
        
                  // Hit the end of our row, mark it unsafe. If the queen can be attacked, return
                  if (currInt >= 'a' && !isChar)
                  {
                    isChar = true;
                    mult = 1;
                    safe = markUnsafe(unsafeRow, row);
                    if(!safe)
                        return safe;
                  }
                  if (!isChar)
                  {
                    currInt -= '0';
                    row += currInt * mult;
                    mult *= 10;
                  }
                  // Change char to correct int, horner's rule
                  else if (isChar)
                  {
                    currInt -= 'a' - 1;
                    column += currInt * mult;
        
                    // End of string, mark diagonals that are not safe and check if this queen is
                    if(j == 0)
                    {
                      safe = markUnsafe(unsafeCol, column);
                      if (!safe)
                        return safe;
                      safe = unsafeDiagB(unsafeDiagB, row, column);
                      if (!safe)
                        return safe;
                      safe = unsafeDiag(unsafeDiag, unsafeDiagNeg, row, column);
                      if (!safe)
                        return safe;
                    }
                  mult *= 26;
                  }
                }
              }
            return safe;
          }
        
          // Helper method to mark the rows and columns as unsafe. .contains for hashset is O(1)
          private static boolean markUnsafe(HashSet unsafe, int value)
          {
            boolean safe = true;
            if(!(unsafe.contains(value)))
              unsafe.add(value);
            else if(unsafe.contains(value))
              safe = false;
            return safe;
          }
        
          private static boolean unsafeDiag(HashSet pos, HashSet neg, int row, int col)
          {
            int diag = 0;
        
            // Formula to check mark diag unsafe, avoiding negative ints
            if(col <= row)
            { 
              diag=row - col; if(pos.contains(diag)) return false; pos.add(diag);
            }
            else if (col > row)
            {
              diag = col - row;
              if(neg.contains(diag))
                return false;
              neg.add(diag);
            }
            return true;
          }
        
          // Function for other diag plane
          private static boolean unsafeDiagB(HashSet diagB, int row, int col)
          {
            int diag = row + col;
        
            if (diagB.contains(diag))
              return false;
            diagB.add(diag);
            return true;
          }
        }`},
        { id: 1, title: 'RunLikeHell', fileName: 'run.java', lang: 'Java'},
        { id: 2, title: 'Checksum Processing', fileName: 'checksum.c', lang: 'C'},
        { id: 3, title: 'Stack Machine', fileName: 'stack.c', lang: 'C'},
        { id: 4, title: 'Akcija Kattis Project', fileName: 'akcija.c', lang: 'C'},
    ];


    return (
        <div className='bg-neutral-900 text-white'>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{ duration: 1}}
            >
                <h1 className="flex justify-center text-5xl pt-64 pb-24">Programs</h1>

                <div className="flex flex-row flex-wrap pb-64 justify-center gap-12">
                    <div className=" h-auto w-1/3 flex-grow-[0.5] lg: ml-8 items-center self-center lg:text-xl leading-loose">
                        <h2 className="text-purple-600 font-semibold tracking-widest lg:text-4xl">{projects[currTab].title}</h2>
                        <h1 className="text-lime-400 lg:text-2xl">{projects[currTab].lang}</h1>
                        <p>Return if any of the queens can attack each other on a chess board. I had to solve the math problem for the rows and be careful of time/space complexity.</p>
                    </div>

                    <div className="bg-slate-950 w-5/6 h-[700px] lg:w-[1000px] lg: mr-8">
                        
                        <div className="flex border-b border-slate-700">
                            { projects.map((tab, index) =>
                                <motion.button 
                                    className={`${index < projects.length - 1 ? 'border-r' : ''} flex-grow border-slate-700 p-2 hover:bg-purple-300 hover:bg-opacity-50
                                        ${ currTab === tab.id ? 'bg-slate-800 border-b-blue-400 border-b-[1.5px] text-purple-300 font-semibold' : ''}`}
                                    onClick= {() => setTab(tab.id)}
                                    key={tab.id}
                                >
                                    {tab.fileName}
                                </motion.button>
                            )}
                        </div>

                        <div className="m-2">
                                Content
                        </div>

                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default ProjectSection;