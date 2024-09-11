// // import React from "react";
// // import {
// //   View,
// //   Text,
// //   Image,
// //   ScrollView,
// //   SafeAreaView,
// //   TouchableOpacity,
// //   StatusBar,
// //   StyleSheet,
// //   ImageBackground,
// // } from "react-native";

// // const LandingPage = ({ navigation }) => {
// //   return (
// //     <ImageBackground
// //       source={require("../assets/HomePage.webp")}
// //       style={styles.backgroundImage}
// //     >
// //       <SafeAreaView style={styles.container}>
// //         <StatusBar barStyle="dark-content" />
// //         <ScrollView contentContainerStyle={styles.scrollContainer}>
// //           <View style={styles.heroSection}>
// //             <Text style={styles.heroText}>Welcome to BodyUp</Text>
// //             <Text style={styles.heroSubText}>
// //               Your ultimate fitness companion
// //             </Text>
// //             <TouchableOpacity
// //               style={styles.getStartedButton}
// //               onPress={() => navigation.navigate("Home")}
// //             >
// //               <Text style={styles.getStartedText}>Get Started</Text>
// //             </TouchableOpacity>
// //           </View>
// //           <View style={styles.featuresSection}>
// //             <View style={styles.featureCard}>
// //               <Image
// //                 source={require("../assets/workoutPlans.jpg")}
// //                 style={styles.featureIcon}
// //               />
// //               <Text style={styles.featureTitle}>Workouts</Text>
// //               <Text style={styles.featureDescription}>
// //                 Discover personalized workout plans tailored to your goals.
// //               </Text>
// //             </View>
// //             <View style={styles.featureCard}>
// //               <Image
// //                 source={require("../assets/nutrition.jpg")}
// //                 style={styles.featureIcon}
// //               />
// //               <Text style={styles.featureTitle}>Nutrition</Text>
// //               <Text style={styles.featureDescription}>
// //                 Get nutrition tips and meal plans to complement your workouts.
// //               </Text>
// //             </View>
// //             <View style={styles.featureCard}>
// //               <Image
// //                 source={require("../assets/arms.jpg")}
// //                 style={styles.featureIcon}
// //               />
// //               <Text style={styles.featureTitle}>Progress</Text>
// //               <Text style={styles.featureDescription}>
// //                 Track your progress and stay motivated with our tools.
// //               </Text>
// //             </View>
// //           </View>
// //           <View style={styles.footer}>
// //             <Text style={styles.footerText}>
// //               © 2023 BodyUp. All rights reserved.
// //             </Text>
// //           </View>
// //         </ScrollView>
// //       </SafeAreaView>
// //     </ImageBackground>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   backgroundImage: {
// //     flex: 1,
// //     resizeMode: "cover",
// //     width: "100%",
// //     height: "100%",
// //   },
// //   container: {
// //     flex: 1,
// //     backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent light overlay
// //   },
// //   scrollContainer: {
// //     flexGrow: 1,
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   heroSection: {
// //     width: "100%",
// //     padding: 40,
// //     alignItems: "center",
// //     justifyContent: "center",
// //     borderBottomLeftRadius: 50,
// //     borderBottomRightRadius: 50,
// //     backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background
// //     marginBottom: 20,
// //   },
// //   heroText: {
// //     fontSize: 36,
// //     fontWeight: "bold",
// //     color: "#333", // Dark text color
// //     textAlign: "center",
// //   },
// //   heroSubText: {
// //     fontSize: 18,
// //     color: "#666", // Slightly darker text color
// //     textAlign: "center",
// //     marginTop: 10,
// //   },
// //   getStartedButton: {
// //     backgroundColor: "#4CAF50", // Accent color for the button
// //     paddingVertical: 15,
// //     paddingHorizontal: 30,
// //     borderRadius: 25,
// //     marginTop: 20,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 4 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 4,
// //     elevation: 5,
// //   },
// //   getStartedText: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     color: "#fff", // White text for the button
// //   },
// //   featuresSection: {
// //     width: "100%",
// //     padding: 20,
// //     alignItems: "center",
// //   },
// //   featureCard: {
// //     width: "90%",
// //     padding: 20,
// //     backgroundColor: "rgba(255, 255, 255, 0.9)", // Light background for cards with opacity
// //     borderRadius: 15,
// //     alignItems: "center",
// //     marginBottom: 20,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 4 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 4,
// //     elevation: 5,
// //   },
// //   featureIcon: {
// //     width: 80,
// //     height: 80,
// //     borderRadius: 40,
// //   },
// //   featureTitle: {
// //     fontSize: 24,
// //     fontWeight: "bold",
// //     color: "#333", // Dark text color
// //     marginTop: 10,
// //   },
// //   featureDescription: {
// //     fontSize: 16,
// //     color: "#666", // Slightly darker text color
// //     textAlign: "center",
// //     marginTop: 10,
// //   },
// //   footer: {
// //     width: "100%",
// //     padding: 20,
// //     alignItems: "center",
// //     borderTopWidth: 1,
// //     borderTopColor: "#ddd",
// //     backgroundColor: "rgba(255, 255, 255, 0.9)",
// //   },
// //   footerText: {
// //     fontSize: 14,
// //     color: "#999",
// //   },
// // });

// // export default LandingPage;
// import React, { useRef, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   SafeAreaView,
//   TouchableOpacity,
//   StatusBar,
//   StyleSheet,
//   ImageBackground,
//   Animated,
// } from "react-native";

// const LandingPage = ({ navigation }) => {
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 1500,
//       useNativeDriver: true,
//     }).start();
//   }, [fadeAnim]);

//   return (
//     <ImageBackground
//       source={require("../assets/HomePage.webp")}
//       style={styles.backgroundImage}
//     >
//       <SafeAreaView style={styles.container}>
//         <StatusBar barStyle="dark-content" />
//         <ScrollView contentContainerStyle={styles.scrollContainer}>
//           <Animated.View style={[styles.heroSection, { opacity: fadeAnim }]}>
//             <Text style={styles.heroText}>Welcome to BodyUp</Text>
//             <Text style={styles.heroSubText}>
//               Your ultimate fitness companion
//             </Text>
//             <TouchableOpacity
//               style={styles.getStartedButton}
//               onPress={() => navigation.navigate("Home")}
//             >
//               <Text style={styles.getStartedText}>Get Started</Text>
//             </TouchableOpacity>
//           </Animated.View>
//           <Animated.View
//             style={[styles.featuresSection, { opacity: fadeAnim }]}
//           >
//             <View style={styles.featureCard}>
//               <Image
//                 source={require("../assets/workoutPlans.jpg")}
//                 style={styles.featureIcon}
//               />
//               <Text style={styles.featureTitle}>Workouts</Text>
//               <Text style={styles.featureDescription}>
//                 Discover personalized workout plans tailored to your goals.
//               </Text>
//             </View>
//             <View style={styles.featureCard}>
//               <Image
//                 source={require("../assets/nutrition.jpg")}
//                 style={styles.featureIcon}
//               />
//               <Text style={styles.featureTitle}>Nutrition</Text>
//               <Text style={styles.featureDescription}>
//                 Get nutrition tips and meal plans to complement your workouts.
//               </Text>
//             </View>
//             <View style={styles.featureCard}>
//               <Image
//                 source={require("../assets/arms.jpg")}
//                 style={styles.featureIcon}
//               />
//               <Text style={styles.featureTitle}>Progress</Text>
//               <Text style={styles.featureDescription}>
//                 Track your progress and stay motivated with our tools.
//               </Text>
//             </View>
//           </Animated.View>
//           <View style={styles.footer}>
//             <Text style={styles.footerText}>
//               © 2023 BodyUp. All rights reserved.
//             </Text>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: "cover",
//     width: "100%",
//     height: "100%",
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent light overlay
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   heroSection: {
//     width: "100%",
//     padding: 40,
//     alignItems: "center",
//     justifyContent: "center",
//     borderBottomLeftRadius: 50,
//     borderBottomRightRadius: 50,
//     backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background
//     marginBottom: 20,
//   },
//   heroText: {
//     fontSize: 36,
//     fontWeight: "bold",
//     color: "#333", // Dark text color
//     textAlign: "center",
//   },
//   heroSubText: {
//     fontSize: 18,
//     color: "#666", // Slightly darker text color
//     textAlign: "center",
//     marginTop: 10,
//   },
//   getStartedButton: {
//     backgroundColor: "#4CAF50", // Accent color for the button
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 25,
//     marginTop: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   getStartedText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#fff", // White text for the button
//   },
//   featuresSection: {
//     width: "100%",
//     padding: 20,
//     alignItems: "center",
//   },
//   featureCard: {
//     width: "90%",
//     padding: 20,
//     backgroundColor: "rgba(255, 255, 255, 0.9)", // Light background for cards with opacity
//     borderRadius: 15,
//     alignItems: "center",
//     marginBottom: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   featureIcon: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//   },
//   featureTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333", // Dark text color
//     marginTop: 10,
//   },
//   featureDescription: {
//     fontSize: 16,
//     color: "#666", // Slightly darker text color
//     textAlign: "center",
//     marginTop: 10,
//   },
//   footer: {
//     width: "100%",
//     padding: 20,
//     alignItems: "center",
//     borderTopWidth: 1,
//     borderTopColor: "#ddd",
//     backgroundColor: "rgba(255, 255, 255, 0.9)",
//   },
//   footerText: {
//     fontSize: 14,
//     color: "#999",
//   },
// });

// export default LandingPage;
import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import Carousel from "react-native-snap-carousel";
const { width } = Dimensions.get("window");
const carouselItems = [
  {
    title: "Workouts",
    description: "Discover personalized workout plans tailored to your goals.",
    image: require("../assets/workoutPlans.jpg"),
  },
  {
    title: "Nutrition",
    description:
      "Get nutrition tips and meal plans to complement your workouts.",
    image: require("../assets/nutrition.jpg"),
  },
  {
    title: "Progress",
    description: "Track your progress and stay motivated with our tools.",
    image: require("../assets/arms.jpg"),
  },
];

const LandingPage = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.featureCard}>
        <Image source={item.image} style={styles.featureIcon} />
        <Text style={styles.featureTitle}>{item.title}</Text>
        <Text style={styles.featureDescription}>{item.description}</Text>
      </View>
    );
  };

  return (
    <ImageBackground
      source={require("../assets/HomePage.webp")}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.heroSection}>
            <Text style={styles.heroText}>Welcome to BodyUp</Text>
            <Text style={styles.heroSubText}>
              Your ultimate fitness companion
            </Text>
            <TouchableOpacity
              style={styles.getStartedButton}
              onPress={() => navigation.navigate("SignIn")} // change to signup or signin page
            >
              <Text style={styles.getStartedText}>Get Started</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.featuresSection}>
            <Carousel
              data={carouselItems}
              renderItem={renderItem}
              sliderWidth={width * 0.8}
              itemWidth={width * 0.8}
              layout={"default"}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    // alignItems: "center",
    justifyContent: "space-between",
  },
  heroSection: {
    width: "100%",
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background
    marginBottom: 20,
  },
  heroText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333", // Dark text color
    textAlign: "center",
  },
  heroSubText: {
    fontSize: 18,
    color: "#666", // Slightly darker text color
    textAlign: "center",
    marginTop: 10,
  },
  getStartedButton: {
    backgroundColor: "#4CAF50", // Accent color for the button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  getStartedText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff", // White text for the button
  },
  featuresSection: {
    width: "100%",
    padding: 80,
    alignItems: "center",
  },
  featureCard: {
    width: "100%",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Light background for cards with opacity
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  featureIcon: {
    width: 100,
    height: 100,
    borderRadius: 40,
  },
  featureTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Dark text color
    marginTop: 10,
  },
  featureDescription: {
    fontSize: 16,
    color: "#666", // Slightly darker text color
    textAlign: "center",
    marginTop: 10,
  },
});

export default LandingPage;
