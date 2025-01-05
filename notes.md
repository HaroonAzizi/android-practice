Class Notes of Android Development in Java:
_(6th semester, fall 2024)_

## First lecture

**We use Java language to make mobile applications.**

#### What's the difference between procedural and object oriented programming?

We will use inheritance, interface, abstraction and other things here in java and programming for Android.

**It is the coolest class ever, because you are coding a mobile application.**

Java is created by Sun Microsystems.
Python is slower compared to Java and even C and C++ languages.

Java editions:

- JSE: Java Standard Edition or Core Java, for standalone apps.
- JEE: Java Enterprise Edition, used for web application.
- JME: Java Micro Edition, for applications for mobile devices and embedded controllers.

---

code:

```java
public class HelloWorldApp{

    public static void main (String [] args){

        System.out.println("hello world")
    }

}
```

---

Java is robust because it has **Byte Code Verifier**. Meaning that the app which has been created in Java cannot have any virus because the byte code verifier thingy won't let virus and other stuff get into your computer.

When you run/download `.jar` file or `.java` file into your computer you won't get a warning from computer telling you that the file has a chance of having virus because of the byte verifier.
`.exe` file though, isn't this way because it doesn't have byte code verifier.

### Four important android versions:

- KitKat: Dalwight compiler (DVM) or Just in Time
- Lollipop: AoT (Ahead of Time)
- Nought: Hybrid compiler (profile guided compilation)
- Pie: Profile in Cloud

**Just in Time:** used when you click on something that would be runned at that specific time. Meaning that before the clicking action, that function wouldn't be running. It was used when memory was a problem.

**Ahead of Time:** When you download an app, all the features are beign compiled. Used when you have more memory option (newer smartphones).

**Hybrid:** Hybrid is using both just in time and ahead of time functions. It sees your usage and adopt to that. If you use something too much, that's ahead of time and if you use the funciton less that would only compiled just in time.
The problem with Hybrid is that when you just download it, your app would be workin in just in time mode, because it doesn't know your usage.

**Profile in The Cloud:** It sees the usage of other people who have similar interests as you.

---

## Second lecture:

We installed Android Studio and set up the envoirnment.

---

## Third lecture:

units of size in Android: mm, pt, dp (device independent pixel) for text, sp for screen

### Intents:

Is similar to GET and POST methods.

Intent is an object which is used for passing information in an application (from one application to another), it is also used to start activity, send broadcast...

**how do you create a second page in Java?**

click on XML file and then activity and after that, new activity.

To connect XML with java you write something like this:

```java
    phone = findViewById(R.id.phoneid)
```

note: R stands for Resource and is a must.
note2: here the phoneid could be replaced with the name of its corresponding xml file.

**To create an Intent you have to create an object of its class**

The `putExtra` method is used to send data from one page to another.
It gets two parameters (key and value)

`getStringExtra` is the get the data from the intent

We have two types of INTENT: _Explicit_ and _Implicit_:

### Explicit Intent: Connects us to the internal world of application. This is used to start an activity for sending messege to another activity.

Explicit makes us go to another page and also sends the data to that page too.

```java
    // on the first page
    Intent intent_name = new Intent(MainActivity.this, secondPage.class);
    // This is to create an intent to get from the first page to the second one.

    intent.putExtra("nameKey", uname);
    intent.putExtra("passwordKey", upassword);
    intent.putExtra("phoneKey", phoneno); // these are to get the data

    startActivity(intent); // this starts a new page and also sends the data from the first page to the second one.
```

before this there are the get stuff which gets the info from the fields

```java
    // second page:
    String un,pass,ph;
    // to recieve msg you have to have an intent

    Intent intent = getIntent();

    un = intent.getStringExtra("nameKey");
    ph = intent.getStringExtra("phoneKey");
    pass = intent.getStringExtra("passwordKey");

    name.setText("Name" + un);
    password.setText("Password" + pass);
    phone.setText("Phone:" + ph)

```

Implecit Intent?

---

- What does `setContentView` do?

- What does `setOnClickListener` do?

- Why do we change `.getText()` to .`toString()`?

- What does Intenet do?
  Intent is a messaging object. It sends the data from one page to another one.

---

## Fourth Lecture:

TODAYS TOPICS:

- Radio Group
- EditText
- TextView
- Linear layout

The launcher activity is the page with has intent filer `<intent-filter>`.

### Implicit Intent: connects us to the outside world. For example when you want to move from a page to an external page.

##### URI -> Uniform Resource Identefier: Is an object which tells us what to access.

`uri.parse()` changes the formatted string to uri object.

(missed some notes because I had a seminar for new commers)

Elham's notes:

Implicit Intent:
To create an implicit intent first we have to create an object of the intent with the property of
_ACTION_DIAL_ for dialing a number and _ACTION_VIEW_ and then we create a URI object using
the following method:

```java

Intent implicit

intent = new Intent(Intent.ACTION_DIAL)
Uri obj = Uri.parses("tel:07843867354")
implicit_intent.setData(obj)
start_activity(implicit_intent)
```

On the first line here we're creating an object of intent to dial the number.
NOTE: For viewing a link you have to use ACTION_VIEW prop.
On the second line we are parsing the phone number; and then setting the data to that object.
‍

---

ic_launcher is used to set the icon of your application. **Favicon for your mobile app.**

## Fifth Lecture:

TODAY'S CONTENT:

- ListView
- Adapter
- ArrayList
- LinearLayout

What's `onClick`? It is a event listener and takes a method as the input.

What's a Toast messege? It shows a pop up kinda text.

What does `wrap_content` do? It works based on the content. If you have more content it will take more place and if you have less content that will take less place on the screen.

##### ListView:

Makes the page scrollable. Used to view vertically scrollable items. It is a UI component.
Go to your XML file and then Design and then Lagacy and from there, you could add list view to the page.

Note that you can't add your data inside the listview directly, you should use adapter to do so.

I'm writing it again just for the fuck of it: you can't directly add data to the listView and if you want to add data there, you have to use something called adapter.

**How to use:**

- Define XML file
- Prepare the data
- Setup Adapter

##### Adapter:

You can't put your items directly to the page, so you need to use adapter as a bridge to help the process.

On the listviewactivity (created by ourselves), you are going to add ArrayAdapter after you specified the content you wanna show as listview.

##### ArrayList:

Works same as vector. In java arrays are static and for that reason you cannot change its size and stuff, so if you want to do that you need ArrayList instead of StringList.

This is String list:

`String provinces [] = {"kabul", "herat", "balkh"}`

This is ArrayList:

`ArrayList<String> provinces = new ArrayList<>(Arrays.asList("kabul", "herat", "balkh"))`

##### Layouts:

**LinearLayout:**

To organize items vertically and horizontally, you need to use LinearLayout.
If you want to have vertical and horizontal at the same page, you should use 3 LinearLayouts. Or in other words, you need to use the nesting concept.

**Relative Layout:**

A type of layout where we can put our items in relation to one another.
To create a calculator you can use the help of a library called "Rhino".

## Sixth Lecture (7th week):

**Sept 22:**

`findViewById()` is used to connect java with the xml file. meaning that we could give functionality to the GUI using this `findViewById` thingy.

Example: `findViewById(R.id.result)`

In order to use mathematical stuff inside java we use a Javascript library called `rhino`.

`implementation 'com.faendir.rhino:rhino-android:1.5.2'` inside dependencies on build.gradle file.

##### What is:

- Linear Layout;
- Absoloute Layout;
- Frame Layout; used for images
- Relative Layout;
- Constraint Layout;

### Linear Layout: used to arrange views horizontally and vertically.

### Absolute Layout: it provides x,y coordinates in order to show the exact location of a view.

### Frame Layout: it displays a single items like an image or a fragment.

### Constraint Layout: a flexible layout manager that allowes you to create complex layouts by constraining the position and size of child views.

---

## Seventh Lecture (8th week):

### Fragment:

When we want to have one activity within multiple views we use fragment.

**Activity vs. Fragment:**
Independent -- Dependent to activity

We need to mention activity name in manifest file -- We will not mention fragment name in manifest

Heavy and difficult to manage -- Light weight and easy to manage

_after 25%:_

### Fragment:

- what is interface?

  interface is a reference type similar to class and contains only constants and abstract methods.

abstract classes only have abstract methods and no one knows how that is implemented.

we don't have multiple inheritance in java. because of that, they created interface.

with inheritance we can't use 2 classes for one instance, but using interface we can do that.

In abstract methods we can either have methods signature or default method (no variable).

can we create an object of the interface? No.

when a class wants to inherite (implement) interface, it should give all the abstract methods to it as its body. `impelents` is the keyword which is used when an interface is needed to be inherited/implemented.

To create an interface:

```java
pulic interface fragmentAListener{
    //your code here
}
```

---

### Alert Dialog Seek Bar:

(10 Nov 2024)
when you want to delete something for example, you should see a confirmation msg before the action actually occurs and that's why you need an alert dialog.

you will see `(dialog,which)` on the recording or on the project from anas which is a lambda expression.

seek bar is like the volume control button on phones and laptops.

ProgressBar is used for showing progress / loading. It has two types: Indeterminate & Determinate.

Date picker and time picker is used to do stuff according to their literal names.
Date picker is used ot pick dates and time picker is used to pick time.

---

(17 Nov 2024)

### RecyclerView:

Is used to get data from data. when we used to get data from the array before, the size of array was specific, but now it isn't because using RecyclerView we will get the data from the database.
Think of RecyclerView as a ListView but it removes the limitaion of ListView.

We use SQLite to manage databases. SQLite is lightweight, open source and doesn't need any server to run on.

`SQLiteOpenHelper` job is to manage versionus and also creation of database. It is a java class.

Some keywords:

- `onCreate()`
- `on Upgrade()`
- `ContentValues`
  `put(key, value)`: this is a method of the ContentValues keyword. used to put values.

What is the `private` keyword is used to? To be private bro. To be accessible to only the members of the class and not be accessible outside of that.

What is the `static` keyword used for? means that the variable is part of the class.

to define constant stuff:

```java
private final static String DB_NAME = "database_name"
```

In java 'single quotation' is used for character and "double quotation" is used for string.

`db.execSQL()`

## NOTE: `execSQL()` is used to execute the stuff which are not having any returns. e.g. it can't run the SELECT command because that has a return type.

## Week 13:

(24-nov-2024)

`Cursor`: Represents the result set from the Database.

The manifest file is responsible to adding back arrow and also the page title.

When we have a return type in database you can't use `execSQL()` because it doesn't return anything, but when we want to
get a return type (for example when we run SELECT) we should use `rawQuery()`.

`Inflate()` gets XML file and gives us view.

RecyclerView Adapter and Inner Class have been studied. (you may want to check the videos)

---

###### 2024-12-01 09:43

#### continue:

We are still working on the project we've been working on since November 17th.

Now we're working on creating the Update and then Delete functionalities, so when the user clicks on the book they would be given the ability to either update or delete the book.

We use `putExtra()` to move data from one page to another using Intent.

To be able to update data, you need to go inside the database file inside your project and then created a function there.

Then you need to have a SQLite object:

```JAVA
SQLiteDatabase db = this.getWritableDatabase
ContentValues cv = new ContentValues
```

(end of the notes)

Written by [Haroon Azizi](https://x.com/az_haroon)
