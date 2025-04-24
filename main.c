#include <stdio.h>

typedef struct {
    int a;
    int b;
} Pair;

Pair swap(int a, int b) {
    Pair p;
    p.a = b;
    p.b = a;
    return p;
}

int main() {
    int x = 5, y = 10;
    printf("Before swap: x = %d, y = %d\n", x, y);

    Pair result = swap(x, y);
    x = result.a;
    y = result.b;

    printf("After swap: x = %d, y = %d\n", x, y);
    return 0;
}
