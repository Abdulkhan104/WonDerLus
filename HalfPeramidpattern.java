public class HalfPeramidpattern {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j < i; j++) {
                System.err.print(i*i);
            }
            System.err.println("");
        }
    }
}
