import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

const OrdView = () => {
  const ordEvents = [
    { id: 1, type: 'Наблюдение', date: '21.11.2025', time: '14:30', location: 'ул. Ленина, 23', status: 'Активно', priority: 'high' },
    { id: 2, type: 'Контроль', date: '21.11.2025', time: '13:15', location: 'пр. Комсомольский, 54', status: 'Завершено', priority: 'medium' },
    { id: 3, type: 'Оперативная съемка', date: '21.11.2025', time: '12:00', location: 'ул. Революции, 11', status: 'Активно', priority: 'high' },
    { id: 4, type: 'Наблюдение', date: '20.11.2025', time: '18:45', location: 'пр. Парковый, 7', status: 'Завершено', priority: 'low' },
    { id: 5, type: 'Контроль', date: '20.11.2025', time: '16:20', location: 'ул. Пушкина, 15', status: 'В обработке', priority: 'medium' },
  ];

  const stats = [
    { label: 'Активных мероприятий', value: '12', icon: 'Activity' },
    { label: 'Завершено за сутки', value: '24', icon: 'CheckCircle' },
    { label: 'В обработке', value: '8', icon: 'Clock' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Раздел ОРД</h2>
          <p className="text-muted-foreground">Оперативно-розыскная деятельность</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Icon name="Plus" size={18} className="mr-2" />
          Новое мероприятие
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className="text-primary bg-primary/20 rounded-lg p-3">
                  <Icon name={stat.icon} size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Icon name="Shield" size={20} />
              Журнал мероприятий
            </span>
            <div className="flex gap-2">
              <Input placeholder="Поиск..." className="w-64" />
              <Button variant="outline" size="icon">
                <Icon name="Filter" size={18} />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Тип</TableHead>
                <TableHead>Дата</TableHead>
                <TableHead>Время</TableHead>
                <TableHead>Место</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Приоритет</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ordEvents.map((event) => (
                <TableRow key={event.id}>
                  <TableCell className="font-medium">{event.type}</TableCell>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>{event.time}</TableCell>
                  <TableCell>{event.location}</TableCell>
                  <TableCell>
                    <Badge variant={event.status === 'Активно' ? 'default' : 'outline'}>
                      {event.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={
                        event.priority === 'high' ? 'border-destructive text-destructive' :
                        event.priority === 'medium' ? 'border-primary text-primary' :
                        'border-muted-foreground text-muted-foreground'
                      }
                    >
                      {event.priority === 'high' ? 'Высокий' : event.priority === 'medium' ? 'Средний' : 'Низкий'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost">
                        <Icon name="Eye" size={16} />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Icon name="Edit" size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrdView;
