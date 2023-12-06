
let programs = [
    {id:0, program:  `import java.util.*;

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
];

const Programs = (id) => {
    return programs[id] || "Paragraph not found";
};

export default Programs;