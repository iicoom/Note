# python ORM

```text
import peewee as pw

myDB = pw.MySQLDatabase(host='47.oo.91.xxx', port=3306, user='mysql', passwd='123456', database='ps')

class MySQLModel(pw.Model):
    """A base model that will use our MySQL database"""
    class Meta:
        database = myDB

class Job(MySQLModel):
    id = pw.AutoField
    source = pw.IntegerField()
    jobid = pw.CharField()
    title = pw.CharField()
    salay = pw.CharField()
    addtime = pw.DateField()

myDB.connect()

# Job.create(source=1, jobid='12345', title='Java', salay= '12')

# data_source = [
#     { 'source': 1, 'jobid': '12345', 'title': 'java', 'salay': '123' },
#     { 'source': 1, 'jobid': '12345', 'title': 'java', 'salay': '123' },
#     { 'source': 1, 'jobid': '12345', 'title': 'java', 'salay': '123' },
#     { 'source': 2, 'jobid': '12345', 'title': 'java', 'salay': '123' },
# ]

# Job.insert_many(data_source).execute()
```

