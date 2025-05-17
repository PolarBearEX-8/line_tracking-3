function L_Turnleft () {
    while (true) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 190)
            basic.pause(100)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 190)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 190)
            basic.pause(200)
            while (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 190)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 190)
            }
            break;
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 1000)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 1000)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 1000)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 1000)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 1000)
        }
    }
}
function L_UturnRight () {
    while (true) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 190)
            basic.pause(100)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 190)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 190)
            basic.pause(500)
            while (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 190)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 190)
            }
            break;
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 1000)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 1000)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 1000)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 1000)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 1000)
        }
    }
}
function L_Turnright () {
    while (true) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 190)
            basic.pause(100)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 190)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 190)
            basic.pause(200)
            while (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 190)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 190)
            }
            break;
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 1000)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 1000)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 1000)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 1000)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 1000)
        }
    }
}
function L_Stop () {
    while (true) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(100)
            break;
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 1000)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 1000)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 1000)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 1000)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 1000)
        }
    }
}
function L_Forword () {
    while (true) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 190)
            basic.pause(100)
            break;
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 1000)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 1000)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 1000)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 1000)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 1000)
        }
    }
}
function L_UturnLeft () {
    while (true) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 190)
            basic.pause(100)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 190)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 190)
            basic.pause(500)
            while (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 190)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 190)
            }
            break;
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 1000)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 1000)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 1000)
        } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 1000)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 1000)
        }
    }
}
basic.forever(function () {
    L_Forword()
    L_Turnright()
    L_Forword()
    L_UturnLeft()
    L_Forword()
    L_Forword()
    L_Turnright()
    L_Forword()
    L_Turnleft()
    L_UturnRight()
    L_Forword()
    L_Forword()
    L_Forword()
    while (true) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
