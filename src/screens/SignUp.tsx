import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";

const defaultAvatars = [
  require("../assets/HomePage.webp"),
  require("../assets/HomePage.webp"),
  require("../assets/HomePage.webp"),
  // Add more avatar images here
];

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(defaultAvatars[0]);

  const handleSignUp = () => {
    // Add your sign-up logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={styles.subTitle}>Choose Your Avatar</Text>
      <FlatList
        horizontal
        data={defaultAvatars}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedAvatar(item)}>
            <Image
              source={item}
              style={
                selectedAvatar === item ? styles.selectedAvatar : styles.avatar
              }
            />
          </TouchableOpacity>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.signInText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1e",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 10,
    color: "#fff",
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 18,
    color: "#aaa",
    marginBottom: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    margin: 5,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    margin: 5,
    borderWidth: 2,
    borderColor: "#FFD700",
  },
  button: {
    width: "100%",
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signInText: {
    color: "#aaa",
    fontSize: 16,
    marginTop: 20,
  },
});

export default SignUp;
