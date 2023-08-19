---
title: 'Automated Integration Testing - Mobile - Appium & Mocha'
date: '2023-08-20'
tags: ['Appium', 'Mocha', 'React Native', 'Mobile']
draft: false
summary: 'Manually repeating these tests is costly and time consuming. Once created, automated tests can be run over and over again at no additional cost and they are much faster than manual tests. Automated software testing can reduce the time to run repetitive tests from days to hours.'
bibliography: references-data.bib
canonicalUrl:
---

# Automated Testing

## Intro

What is automated testing? Automated testing is the application of software tools to automate a human-driven manual process of reviewing and validating a software product. Most modern agile and DevOps software projects now include automated testing from inception.

With [Appium](https://appium.io/docs/en/2.1/) we automate any behavior a user can do such as pressing on UI elements, filling in forms, submitting them, and navigating the app.

![Preview](https://s11.gifyu.com/images/SgN3x.gif)

In this walkthrough we'll complete the following automation tests for our app's Auth screen.

- [✔] should display header
- [✔] should change colors when clicked
- [✔] should display an error message when an invalid email is entered
- [✔] should display an error message when an invalid password is entered
- [✔] should not display an error message when valid email & password is entered
- [✔] should navigate to success screen after form is submitted

## Dependencies

- Expo 49.07
- Appium 2.0.1
- Appiumappium-webdriver 1.0.3

## Initialize Project

Initialize new project/repo. Install dependencies. Switch to bare workflow

```sh
npx create-expo-app mobile-testing
cd mobile-testing
npm install --save-dev sharp-cli
npx expo prebuild

```

Answer yes to package name on android and ios

## Setup Appium

Install appium dependencies and ensure it's working.

```sh
npm install --save-dev webdriverio
npm install appium-webdriver appium-webdriveragent
appium
```

## Setup Android Integration Test

```sh
mkdir integration
touch integration/android.js
```

Appium doesn't support a hybrid driver. We have to initialize and run tests for Android & iOS separately.

```js
const { remote } = require('webdriverio')

// capabilities configures the driver driver below
// Some configs are platform, activity, package, and automation name

const capabilities = {
  platformName: 'Android',
  'appium:deviceName': 'Android',
  'appium:appActivity': '.MainActivity',
  'appium:automationName': 'UiAutomator2',
  'appium:appPackage': 'com.primetimetran.mobiletesting',
}

const wdOpts = {
  capabilities,
  logLevel: 'debug',
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
}

// The driver.$(...) syntax is a selector which selects/identifies a UI element
// on the screen to test against. In this case we look for a text element with "Open up App.js to start"

async function runTest() {
  const driver = await remote(wdOpts)
  try {
    var el = await driver.$(`//*[contains(@text, "Open up App.js to start")]`)
    await el.click()
  } catch {
    console.log('Error: Running Tests')
  }
}

runTest().catch(console.error)
```

## Install development build on Android emulator and run first test

```sh
emulator -avd Pixel_6_Pro_API_33 # Switch Pixel_6_Pro_API_33 to your preferred Android emulator
npx expo run:android # Install the Expo dev client on the device
expo start
node integration/android.js
```

You should see that the log process opens up the Android app, runs the test, and then successfully exits; very nice.

The Appium logs printing something like below. The most important thing, the ending 200.

```sh
[HTTP] <-- POST /session/f4622dcd-58a3-409d-afc4-45b7ad9eeb91/element/00000000-0000-001a-ffff-ffff0000000e/click 200 264 ms - 14
```

And the console which you ran `node integration/android.js` exiting without big red error messages.

## Add logic to change color of text on

Appium can change the state of our application by performing any behavior a user would, pressing on a UI element as an example.

```js
// This post assumes you know React Native well.
// In summary, we add state to the App component for keeping track of the number of presses on the default/header text.
// If the number of presses is even, we change the header text to blue.

import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text style={count % 2 == 0 ? styles.blue : {}}>
          Open up App.js to start working on your app!
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blue: {
    color: '#4287f5',
  },
})
```

Run the tests and observe the resulting behavior.

```sh
node integration/android.js
```

Pay close attention, the text will go from blue to black immediately after the app loads; incredible.

## Add pauses & more clicks

We'll often need to slow down the testing process to give the app time to catchup as well as observe the UI behavior more easily.

```js
const { remote } = require('webdriverio')

const capabilities = {
  platformName: 'Android',
  'appium:deviceName': 'Android',
  'appium:appActivity': '.MainActivity',
  'appium:automationName': 'UiAutomator2',
  'appium:appPackage': 'com.primetimetran.mobiletesting',
}

const wdOpts = {
  capabilities,
  logLevel: 'debug',
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
}

async function runTest() {
  const driver = await remote(wdOpts)
  try {
    var el = await driver.$(`//*[contains(@text, "Open up App.js to start")]`)
    await el.click()
    await driver.pause(1000)
    await el.click()
    await driver.pause(1000)
    await el.click()
    await driver.pause(1000)
    await el.click()
    await driver.pause(1000)
    await el.click()
    await driver.pause(1000)
    await el.click()
    await driver.pause(1000)
    await el.click()
    await driver.pause(1000)
    await el.click()
  } catch {
    console.log('Error: Running Tests')
  }
}

runTest().catch(console.error)
```

We'll now see the header text oscillate between black & blue; incredible.

Lessons learned with Appium:

- We can automate starting the app.
- We can automate finding text.
- We can automate changing state by mimicking user behavior such as clicks/presses.

## Add a real world example of something we'd like to automate the testing of

Forms are everywhere in the wild. Let's automate finding a text input, filling it with data, submitting, and the resulting behavior.

The purpose of this blog isn't to teach react so we'll describe the below at a 10,000 ft overview.

- We define state for form & success.
- We define a handler for submitting the form.
- We define helpers for validating email & passwords.
- We define two text fields which capture the user's email & password.

```js
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

function validEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)\*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

function validPassword(pw) {
  return (
    /[A-Z]/.test(pw) &&
    /[a-z]/.test(pw) &&
    /[0-9]/.test(pw) &&
    /[^a-za-z0-9]/.test(pw) &&
    pw.length > 4
  )
}

const defaultForm = {
  error: {
    email: false,
    password: false,
  },
}

export default function App() {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState(defaultForm)
  const [success, setSuccess] = useState(false)

  const onSubmit = () => {
    const errors = {}
    try {
      if (!validEmail(form['email'])) {
        errors['email'] = true
      }
      if (!validPassword(form['password'])) {
        errors['password'] = true
      }
      if (Object.keys(errors).length > 0) {
        setForm({
          ...form,
          error: {
            ...form.error,
            ...errors,
          },
        })
        return
      }
      setForm(defaultForm)
      setSuccess(true)
    } catch (error) {
      console.error('Error: fillAndSubmitForm', error)
    } finally {
    }
  }

  if (success)
    return (
      <View style={styles.container}>
        <Text style={styles.success} accessibilityLabel="Success">
          Success!
        </Text>
      </View>
    )

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setCount(count + 1)} accessibilityLabel="Open App">
        <Text style={[styles.header, count % 2 == 0 ? styles.blue : {}]}>My App</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <TextInput
        value={form.email}
        style={styles.input}
        placeholder="john@email.com"
        accessibilityLabel="emailTextInput"
        onChangeText={(text) => setForm({ ...form, email: text })}
      />
      <View style={styles.prompt}>
        {form.error.email && (
          <Text style={styles.error} accessibilityLabel="promptEmail">
            Enter valid email
          </Text>
        )}
      </View>
      <TextInput
        type="password"
        placeholder="*******"
        style={styles.input}
        value={form.password}
        secureTextEntry={true}
        accessibilityLabel="passwordTextInput"
        onChangeText={(text) => setForm({ ...form, password: text })}
      />
      <View style={styles.prompt}>
        {form.error.password && (
          <Text style={styles.error} accessibilityLabel="promptPassword">
            Enter valid password
          </Text>
        )}
      </View>
      <TouchableOpacity onPress={onSubmit} style={styles.button} accessibilityLabel="submitButton">
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  blue: {
    color: '#4287f5',
  },
  success: {
    color: 'green',
    fontSize: 30,
  },
  prompt: {
    height: 30,
  },
  error: {
    color: 'red',
  },
  input: {
    height: 44,
    padding: 10,
    width: '95%',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: 'grey',
  },
  button: {
    height: 44,
    width: '95%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4287f5',
  },
})
```

Update the integration tests:

- Look for text "My App" now.
- Find the email input from the value of accessibilityLabel.
- Find the password input from the value of accessibilityLabel.

```js
const { remote } = require('webdriverio')

const capabilities = {
  platformName: 'Android',
  'appium:deviceName': 'Android',
  'appium:appActivity': '.MainActivity',
  'appium:automationName': 'UiAutomator2',
  'appium:appPackage': 'com.primetimetran.bttesting',
}

const wdOpts = {
  capabilities,
  logLevel: 'debug',
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
}

async function runTest() {
  const driver = await remote(wdOpts)
  await changeColors(driver)
  await fillAndSubmitForm(driver)
}

async function changeColors(driver) {
  try {
    var el = await driver.$(`//*[contains(@text, "My App")]`)
    await el.click()
    await driver.pause(1000)
    await el.click()
    await driver.pause(1000)
    await el.click()
    await driver.pause(1000)
    await el.click()
  } catch (error) {
    console.error('Error: changeColors', error)
  } finally {
    console.log('Success: changeColors')
  }
}

async function fillAndSubmitForm(driver) {
  try {
    const el = await driver.$('android=new UiSelector().description("emailTextInput")')
    await el.setValue('loi@coderschool.com')

    const el2 = await driver.$('android=new UiSelector().description("passwordTextInput")')
    await el2.setValue('Abc123!')

    const submitButton = await driver.$('android=new UiSelector().description("submitButton")')
    await submitButton.click()
  } catch (error) {
    console.error('Error: fillAndSubmitForm', error)
  } finally {
    console.log('Success: fillAndSubmitForm')
  }
}

runTest().catch(console.error)
```

When we run our tests now, we should see:

- The app opens
- Toggles the header text between blue & black
- Enters an email
- Enters a password
- Submits the the data
- Changes to a screen which indicates a successfully submitted form.

## Handle success & failure in UI

Run test again and notice we're navigated to the success screen. Incredible!

Run the integration test with an invalid password and notice we get a prompt for the password.

```js
await el2.setValue('Abc123')
```

Run the integration test with an invalid email and notice we get a prompt for the email.

```js
await el.setValue('loi@coderschool')
```

These past two tests could be done easily with unit tests. We added them as proof of concept for inputting invalid data.

Furthermore, the tests can be used to valid the behavior of the UI, showing or removing prompts as appropriate depending on what the user did correctly.

How might we validate the app/ui behaved correctly given a user entered an invalid email, specifically using Appium?

How might we validate the app/ui behaved correctly given a user entered an invalid password, specifically using Appium?

## Add iOS Tests

appium driver install xcuitest
npx expo run:ios
Clean build folder on XCode
Select any ios simulator device (arm64, x86_64)
Build
cd ~/Library/Developer/Xcode/DerivedData/bttesting-bzxocugyfrvpjfhfuzmjukoowyvy/Build/Products/Debug-iphonesimulator

Create Payload dir
Copy bttesting
compress folder and rename to test.ipa

Mv to working directory

Run tests
