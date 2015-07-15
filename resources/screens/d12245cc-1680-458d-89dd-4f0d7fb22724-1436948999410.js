jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Button_18",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Button_18",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "http://cu.nj02.dl2.baidupcs.com/file/bf8e59c941b6fc2179cb6b77a2299c02?bkt=p-7139d6659ab94dea3ab04f544c6f0cfb&fid=721540878-250528-82110359042126&time=1436948896&sign=FDTAXERLBH-DCb740ccc5511e5e8fedcff06b081203-%2BaAy9fiqgv4EBm%2BqcskrGP0af%2Fw%3D&to=ncp&fm=Nan,B,U,nc&sta_dx=0&sta_cs=0&sta_ft=jpg&sta_ct=7&fm2=Nanjing,B,U,nc&newver=1&newfm=1&secfm=1&flow_ver=3&sl=80019535&expires=8h&rt=sh&r=214623408&mlogid=839107335&vuk=721540878&vbdid=1335724738&fin=20120905001.jpg&fn=20120905001.jpg&slt=pm&uta=0&rtype=1&iv=0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });