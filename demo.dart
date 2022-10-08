main() {
  bool isPowerOfThree(int n) {
    double nn = n.toDouble();
    if (nn <= 0) {
      return false;
    }

    while (nn % 3 == 0) {
      nn = nn / 3;
    }

    if (nn == 1) {
      return true;
    }
    return false;
  }

  print((10 / 3).floor());
  print(10 / 2);
}
