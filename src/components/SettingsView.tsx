import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const SettingsView = () => {
  return (
    <div className="space-y-6 animate-fade-in max-w-4xl">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Настройки системы</h2>
        <p className="text-muted-foreground">Конфигурация и параметры</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Video" size={20} />
            Настройки камер
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="resolution">Разрешение записи по умолчанию</Label>
            <Input id="resolution" defaultValue="1920x1080" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fps">Частота кадров (FPS)</Label>
            <Input id="fps" type="number" defaultValue="30" />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Ночной режим</Label>
              <p className="text-sm text-muted-foreground">Автоматическое переключение на ИК-подсветку</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Детекция движения</Label>
              <p className="text-sm text-muted-foreground">Запись при обнаружении движения</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Database" size={20} />
            Хранение записей
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="storage">Срок хранения записей (дни)</Label>
            <Input id="storage" type="number" defaultValue="30" />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Автоудаление старых записей</Label>
              <p className="text-sm text-muted-foreground">Освобождать место автоматически</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="p-4 bg-secondary rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Использовано места</span>
              <span className="font-semibold">2.4 ТБ / 5 ТБ</span>
            </div>
            <div className="w-full bg-background rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '48%' }}></div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Bell" size={20} />
            Уведомления
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Email уведомления</Label>
              <p className="text-sm text-muted-foreground">Получать оповещения на почту</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Push уведомления</Label>
              <p className="text-sm text-muted-foreground">Мгновенные оповещения в браузере</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Уведомления о событиях</Label>
              <p className="text-sm text-muted-foreground">Оповещать при обнаружении движения</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Shield" size={20} />
            Безопасность
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="timeout">Время бездействия до выхода (минуты)</Label>
            <Input id="timeout" type="number" defaultValue="30" />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Двухфакторная аутентификация</Label>
              <p className="text-sm text-muted-foreground">Дополнительная защита аккаунта</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Журнал действий</Label>
              <p className="text-sm text-muted-foreground">Вести логи всех операций</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button className="bg-primary">
          <Icon name="Save" size={18} className="mr-2" />
          Сохранить изменения
        </Button>
        <Button variant="outline">
          Отмена
        </Button>
      </div>
    </div>
  );
};

export default SettingsView;
