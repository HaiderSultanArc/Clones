import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

final List<String> chats = <String>['ABC Person', 'DEF Person', 'GHI Person', 'JKL Person', 'MNO Person', 'PQR Person', 'STU Person', 'VWX Person', 'YZ Person'];
final List<String> status = <String>['ABC Person', 'DEF Person', 'GHI Person', 'JKL Person', 'MNO Person', 'PQR Person', 'STU Person', 'VWX Person', 'YZ Person'];

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "WhatsApp",
      color: Color(0xFFF075E55),

      home: WhatsApp()

    );
  }
}


class WhatsApp extends StatefulWidget {
  WhatsAppState createState() => WhatsAppState();
}

class WhatsAppState extends State<WhatsApp> {
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 4,
      initialIndex: 1,

      child: Scaffold(
        appBar: AppBar(
          title: Text("WhatsApp"),
          backgroundColor: Color(0xFFF075E55),
          actions: [
            IconButton(icon: Icon(Icons.search, color: Colors.white), onPressed: () { }),
            IconButton(icon: Icon(Icons.more_vert_rounded, color: Colors.white), onPressed: () { })
          ],

          bottom: new TabBar(
            indicatorColor: Colors.white,
            indicatorWeight: 3,
            labelColor: Colors.white,
            isScrollable: true,

            tabs: [
              Tab(
                child: Icon(Icons.camera_alt, color: Colors.white)
              ),
              
              new Container(
                width: 90,
                child: Tab(
                  text: "CHATS",
                )
              ),

              new Container(
                width: 90,
                child: Tab(
                  text: "STATUS"
                )
              ),
              
              new Container(
                width: 90,
                child: Tab(
                  text: "CALLS"
                )
              )
            ]
          
          ),
          
        ),

        body: TabBarView(
          children: [
            Icon(Icons.camera_alt),

            Chats(),

            Status(),
            
            Container(
              margin: EdgeInsets.only(top: 300),

              child: Text(
                "CALLS PAGE",
                style: TextStyle(fontSize: 50, fontWeight: FontWeight.bold),
                textAlign: TextAlign.center
              )
            )
          ]
        ),

        floatingActionButton: FloatingActionButton(
          onPressed: () {
            setState(
              () {
                chats.add("Person Added");
              }
            );
          },

          child: Icon(Icons.message),
          backgroundColor: Color(0xFF09D261),
          splashColor: Colors.green,
        ),
      
      )
    );
  }
}

class Chats extends StatelessWidget {
  Widget build(BuildContext context) {
    return ListView.separated(
      padding: EdgeInsets.all(12),
      itemCount: chats.length,

      itemBuilder: (BuildContext context, int index) {
        return Row(
          mainAxisSize: MainAxisSize.max,
          children: [
            Container(
              child: CircleAvatar(
                radius: 27,
                
                backgroundColor: Color(0xFFF075E55),
                child: Text(chats[index][0].toUpperCase() + chats[index][1].toUpperCase(), style: TextStyle(color: Colors.white))
              )
            ),

            Column(
              mainAxisSize: MainAxisSize.max,
              children: [
                Container(
                  margin: EdgeInsets.only(left: 18),

                  child: Text(
                    chats[index], 
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)
                  )
                ),

                Container(
                  margin: EdgeInsets.only(left: 18),

                  child: Text(
                    chats[index], 
                    style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Color(0xFFB2B2B2))
                  )
                )
              ]
            ),
            
            new Spacer(),

            Container(
              child: Text(
                "12:00 AM", 
                style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: Color(0xFFB2B2B2))
              )
            )
          ]
        );
      },

      separatorBuilder: (BuildContext context, int index) => const Divider(),
    );
  }
}

class Status extends StatelessWidget {
  Widget build(BuildContext context) {
    return ListView.separated(
      padding: EdgeInsets.all(12),
      itemCount: chats.length,

      itemBuilder: (BuildContext context, int index) {
        return Row(
          children: [
            Container(
              child: CircleAvatar(
                radius: 27,
                backgroundColor: Colors.black,
                child: Text(chats[index][0].toUpperCase() + chats[index][1].toUpperCase(), style: TextStyle(color: Colors.white))
              )
            ),

            Column(
              children: [
                Container(
                  margin: EdgeInsets.only(left: 18),

                  child: Text(
                    chats[index], 
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)
                  )
                ),

                Container(
                  margin: EdgeInsets.only(left: 18),

                  child: Text(
                    "12:00 AM", 
                    style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: Color(0xFFB2B2B2))
                  )
                )
              ]
            ),
          ]
        );
      },

      separatorBuilder: (BuildContext context, int index) => const Divider(),
    );
  }
}

// Assignment => Clone First Screen of WhatsApp

/*
==> Thursday!!

Widgets that you required!!

- Number chats? its up to

- Animation()
- Navigation() --> Optional

- AppBar()
  - title, actions
- TabBar()
  - 4 tabs
      - camera
      - chats
        - ListView() or ListView.builder()
        - ListTile()
          - CircleAvatar()
        - FloatingActionButton()
      - status
      - calls
- images (repeat)
*/