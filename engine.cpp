#include <iostream>
bool isWifiConnected = true;

void checkConnection() {
    if (!isWifiConnected) {
        std::cout << "ERROR: Wi-fi Has Been Off." << std::endl;
    }
}
