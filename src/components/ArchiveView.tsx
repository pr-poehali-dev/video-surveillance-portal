import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ArchiveView = () => {
  const recordings = [
    { id: 1, camera: 'Камера №45', date: '21.11.2025', time: '14:30-15:00', duration: '30 мин', size: '2.4 ГБ', type: 'Событие' },
    { id: 2, camera: 'Камера №12', date: '21.11.2025', time: '13:00-14:00', duration: '1 ч', size: '4.8 ГБ', type: 'Плановая' },
    { id: 3, camera: 'Камера №89', date: '21.11.2025', time: '12:00-12:30', duration: '30 мин', size: '2.2 ГБ', type: 'Событие' },
    { id: 4, camera: 'Камера №156', date: '20.11.2025', time: '18:00-20:00', duration: '2 ч', size: '9.6 ГБ', type: 'Плановая' },
    { id: 5, camera: 'Камера №203', date: '20.11.2025', time: '16:00-17:00', duration: '1 ч', size: '4.5 ГБ', type: 'Плановая' },
    { id: 6, camera: 'Камера №78', date: '20.11.2025', time: '15:30-16:00', duration: '30 мин', size: '2.1 ГБ', type: 'Событие' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Архив записей</h2>
          <p className="text-muted-foreground">Поиск и просмотр архивных записей</p>
        </div>
        <Button variant="outline">
          <Icon name="Download" size={18} className="mr-2" />
          Экспорт
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Icon name="Filter" size={20} />
              Фильтры поиска
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input type="date" placeholder="Дата начала" />
            <Input type="date" placeholder="Дата окончания" />
            <Input placeholder="Номер камеры" />
            <Button className="bg-primary">
              <Icon name="Search" size={18} className="mr-2" />
              Найти
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {recordings.map((record) => (
          <Card key={record.id} className="hover-scale">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="w-32 h-24 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Video" size={32} className="text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-foreground">{record.camera}</p>
                      <p className="text-sm text-muted-foreground">{record.date} · {record.time}</p>
                    </div>
                    <Badge variant="outline" className={record.type === 'Событие' ? 'border-accent text-accent' : ''}>
                      {record.type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {record.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="HardDrive" size={14} />
                      {record.size}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Icon name="Play" size={14} className="mr-1" />
                      Просмотр
                    </Button>
                    <Button size="sm" variant="outline">
                      <Icon name="Download" size={14} />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Icon name="Share2" size={14} />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Показано 6 из 1,284 записей
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Icon name="ChevronLeft" size={16} />
              </Button>
              <Button variant="outline" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">
                <Icon name="ChevronRight" size={16} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArchiveView;
