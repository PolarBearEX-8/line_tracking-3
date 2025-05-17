left = 0
right = 0

def on_forever():
    global left, right
    left = maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT)
    right = maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT)
    if left == 0 and right == 0:
        # วิ่งตรงเร็ว
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 80)
        # พักสั้น ๆ เพื่อความเสถียร
        basic.pause(100)
    elif left == 1 and right == 0:
        # ตรวจจับว่าออกนอกด้านซ้าย
        maqueen.motor_stop(maqueen.Motors.ALL)
        # หยุดนิดหนึ่งเพื่อให้มั่นใจว่าเบรกจริง
        basic.pause(100)
        # เลี้ยวซ้ายเพื่อกลับเข้าเส้น
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 30)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 70)
        # ให้เวลากลับเข้าเส้น
        basic.pause(100)
    elif left == 0 and right == 1:
        # ตรวจจับว่าออกนอกด้านขวา
        maqueen.motor_stop(maqueen.Motors.ALL)
        basic.pause(100)
        # เลี้ยวขวาเพื่อกลับเข้าเส้น
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 70)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 30)
        basic.pause(100)
    else:
        # ไม่พบเส้นทั้งสองฝั่ง
        maqueen.motor_stop(maqueen.Motors.ALL)
        basic.pause(100)
        # หมุนตัวกลับอย่างแรง
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 60)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 60)
        basic.pause(100)
basic.forever(on_forever)
